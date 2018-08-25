import './Header.css';

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const NAV_FILTER = ['Startseite', 'Kontakt', 'Impressum und Datenschutz'];

class Header extends Component {
	render() {
		const { data } = this.props;
		let pages = [];
		if (data && data.pages) {
			pages = data.pages.edges
				.map(edge => edge.node)
				.filter(({ title }) => NAV_FILTER.indexOf(title) === -1);
		}
		return (
			<Layout.Header>
				<div className="Logo-blue" />
				<Menu
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '80px' }}
				>
					<Menu.Item key="1">
						<NavLink to={`/`} className="nav-text">
							Startseite
						</NavLink>
					</Menu.Item>
					{pages.map(({ uri, title }, index) => (
						<Menu.Item key={`${index + 3}`}>
							<NavLink to={`/${uri}`} className="nav-text">
								{title}
							</NavLink>
						</Menu.Item>
					))}
					<Menu.Item key="2" style={{ float: 'right' }}>
						<NavLink to={`/kontakt`} className="nav-text">
							<span>
								<Icon type="team" />
								Kontakt
							</span>
						</NavLink>
					</Menu.Item>
					<Menu.Item key="3" style={{ float: 'right' }}>
						<NavLink to={`/suche`} className="nav-text">
							<span>
								<Icon type="search" />
								Suche
							</span>
						</NavLink>
					</Menu.Item>
				</Menu>
			</Layout.Header>
		);
	}
}

class HeaderRenderer extends Component {
	render() {
		return (
			<Query
				query={gql`
					query Pages {
						pages {
							edges {
								node {
									id
									title
									uri
								}
							}
						}
					}
				`}
			>
				{({ loading, error, data }) => <Header data={data} />}
			</Query>
		);
	}
}

export default HeaderRenderer;
