import './StartPage.css';

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Renderer from '../../Renderer/Renderer';
import { removeHTML, extractTitleImage } from '../../Utils/post';
import Stage from './Stage/Stage';
import Grid from './Grid/Grid';

type StartPageData = {
	posts: {
		edges: Array<{
			node: {
				id: string,
				title: string,
				titleImage: string,
				content: string,
				featuredImage: {
					sourceUrl: string
				}
			}
		}>
	}
};

const extractCategories = data => {
	const categories = data.categories.edges.map(edge => edge.node);
	categories.forEach(
		({ children }) =>
			children &&
			children.edges.forEach(edge => edge && categories.push(edge.node))
	);
	return categories;
};

const transform = (data: StartPageData) => {
	const postsWithImages = data.posts.edges.map(({ node: post }) => ({
		...post,
		title: removeHTML(post.title),
		titleImage:
			(post.featuredImage && post.featuredImage.sourceUrl) ||
			(post.content && extractTitleImage(post.content)),
		categories: extractCategories(post)
	}));

	const stagePost =
		postsWithImages.find(({ titleImage }) => !!titleImage) ||
		postsWithImages[0];
	const contentPosts = postsWithImages.filter(({ id }) => id !== stagePost.id);
	const categories = extractCategories(data);

	return {
		stagePost,
		contentPosts,
		categories
	};
};

type State = {
	categoryFilter: Array<number>
};

class StartPage extends Component<void, State> {
	state = {
		categoryFilter: []
	};

	setCategoryFilter = (categorieIds: Array<number>): void =>
		this.setState({ categoryFilter: categorieIds });

	render() {
		const { categoryFilter } = this.state;
		return (
			<Query
				variables={{ categoryFilter: categoryFilter }}
				query={gql`
					query StartPage($categoryFilter: [Int]) {
						categories {
							edges {
								node {
									id
									categoryId
									name
									count
									children {
										edges {
											node {
												id
												categoryId
												name
												count
											}
										}
									}
								}
							}
						}
						posts(first: 25, where: { categoryIn: $categoryFilter }) {
							edges {
								node {
									id
									title
									content
									featuredImage {
										sourceUrl
									}
									categories {
										edges {
											node {
												id
												name
												count
												children {
													edges {
														node {
															id
															name
															count
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				`}
			>
				{Renderer(transform)(({ stagePost, contentPosts, categories }) => (
					<React.Fragment>
						<Stage
							stagePost={stagePost}
							categories={categories}
							setCategoryFilter={this.setCategoryFilter}
							categoryFilter={categoryFilter}
						/>
						<Grid contentPosts={contentPosts} />
					</React.Fragment>
				))}
			</Query>
		);
	}
}

export default StartPage;
