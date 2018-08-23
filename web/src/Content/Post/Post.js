import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Renderer from '../../Renderer/Renderer';
// import { removeHTML, extractTitleImage } from '../../Utils/post';

const transform = data => data.post;

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
				{Renderer(transform)(({ content }) => (
					<div dangerouslySetInnerHTML={{ __html: content }} />
				))}
			</Query>
		);
	}
}

export default Post;
