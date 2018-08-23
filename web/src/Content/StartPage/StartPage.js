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

const transform = (data: StartPageData) => {
	const postsWithImages = data.posts.edges.map(({ node: post }) => ({
		...post,
		title: removeHTML(post.title),
		titleImage:
			(post.featuredImage && post.featuredImage.sourceUrl) ||
			(post.content && extractTitleImage(post.content))
	}));

	const stagePost =
		postsWithImages.find(({ titleImage }) => !!titleImage) ||
		postsWithImages[0];
	const contentPosts = postsWithImages.filter(({ id }) => id !== stagePost.id);

	return {
		stagePost,
		contentPosts
	};
};

class StartPage extends Component {
	render() {
		return (
			<Query
				query={gql`
					{
						posts {
							edges {
								node {
									id
									title
									content
									featuredImage {
										sourceUrl
									}
								}
							}
						}
					}
				`}
			>
				{Renderer(transform)(({ stagePost, contentPosts }) => (
					<React.Fragment>
						<Stage stagePost={stagePost} />
						<Grid contentPosts={contentPosts} />
					</React.Fragment>
				))}
			</Query>
		);
	}
}

export default StartPage;
