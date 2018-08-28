import './StartPage.css';

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Button } from 'antd';

import Renderer from '../../Renderer/Renderer';
import { removeHTML, extractTitleImage } from '../../Utils/post';
import { formatDate } from '../../Utils/calendar';
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
	const categories = data.categories.edges
		.map(edge => edge.node)
		.filter(({ name }) => name !== 'Uncategorized');
	return categories;
};

const transform = (data: StartPageData) => {
	const postsWithImages = data.posts.edges.map(({ node: post }) => ({
		...post,
		title: removeHTML(post.title),
		titleImage:
			(post.featuredImage && post.featuredImage.sourceUrl) ||
			(post.content && extractTitleImage(post.content)),
		text: removeHTML(post.content),
		date: formatDate(post.date),
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
	categoryFilter: Array<number>,
	posts: number
};

class StartPage extends Component<void, State> {
	state = {
		categoryFilter: [],
		posts: 25
	};

	setCategoryFilter = (categorieIds: Array<number>): void =>
		this.setState({ categoryFilter: categorieIds });

	handleOnClickMore = () => this.setState({ posts: this.state.posts + 10 });

	render() {
		const { categoryFilter, posts } = this.state;
		return (
			<Query
				variables={{ categoryFilter: categoryFilter, posts }}
				query={gql`
					query StartPage($categoryFilter: [Int], $posts: Int!) {
						categories(where: { shouldOutputInFlatList: true }) {
							edges {
								node {
									id
									categoryId
									name
									count
								}
							}
						}
						posts(first: $posts, where: { categoryIn: $categoryFilter }) {
							edges {
								node {
									id
									date
									title
									content
									featuredImage {
										sourceUrl
									}
									categories(where: { shouldOutputInFlatList: true }) {
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
						<Button
							onClick={this.handleOnClickMore}
							style={{
								height: '100px',
								width: 'calc(100% - 10px)',
								margin: '5px',
								borderRadius: '20px',
								boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)'
							}}
						>
							Mehr
						</Button>
					</React.Fragment>
				))}
			</Query>
		);
	}
}

export default StartPage;
