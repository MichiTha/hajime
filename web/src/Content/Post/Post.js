import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Card } from 'antd';

import Renderer from '../../Renderer/Renderer';
import { removeHTML, extractTitleImage } from '../../Utils/post';

const transform = data => {
	const { post } = data;
	return { ...post, title: removeHTML(post.title) };
};

class Post extends Component {
	render() {
		const { match } = this.props;
		const { params } = match;
		const { id } = params;
		return (
			<Query
				variables={{ id }}
				query={gql`
					query Post($id: ID!) {
						post(id: $id) {
							id
							title
							content
							featuredImage {
								sourceUrl
							}
						}
					}
				`}
			>
				{Renderer(transform)(({ content, title }) => (
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Card
							style={{
								margin: '5px',
								boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)',
								maxWidth: '1200px',
								minHeight: '80vh',
								overflow: 'hidden'
							}}
							title={title}
						>
							<div dangerouslySetInnerHTML={{ __html: content }} />{' '}
						</Card>
					</div>
				))}
			</Query>
		);
	}
}

export default Post;
