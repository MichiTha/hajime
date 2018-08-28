import './Content.css';

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import StartPage from './StartPage/StartPage';
import Post from './Post/Post';
import Page from './Page/Page';
import Event from './Event/Event';

class Content extends Component {
	render() {
		return (
			<Layout.Content>
				<Route exact path="/" component={StartPage} />
				<Route path="/post/:id" component={Post} />
				<Route path="/termin/:id" component={Event} />
				<Route path="/:uri" component={Page} />
			</Layout.Content>
		);
	}
}

export default Content;
