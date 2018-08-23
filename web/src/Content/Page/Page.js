import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Renderer from '../../Renderer/Renderer';
// import { removeHTML, extractTitleImage } from '../../Utils/post';

const transform = data => data.pageBy;

class Page extends Component {
	render() {
		const { match } = this.props;
		const { params } = match;
		const { uri } = params;
		console.log('uri: ', uri);
		return (
			<Query
				variables={{ uri }}
				query={gql`
					query Page($uri: String!) {
						pageBy(uri: $uri) {
							id
							title
							content
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

export default Page;
