import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Card } from 'antd';

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
						>
							<div dangerouslySetInnerHTML={{ __html: content }} />{' '}
						</Card>
					</div>
				))}
			</Query>
		);
	}
}

export default Page;
