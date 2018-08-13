import './Content.css';

import React, { Component } from 'react';
import { Layout } from 'antd';

import StartPage from './StartPage/StartPage';

class Content extends Component {
	render() {
		return (
			<Layout.Content>
				<StartPage />
			</Layout.Content>
		);
	}
}

export default Content;
