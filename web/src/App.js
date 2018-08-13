import './App.css';

import React, { Component } from 'react';
import { Layout } from 'antd';

import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

class App extends Component {
	render() {
		return (
			<Layout className="App">
				<Header />
				<Content />
				<Footer />
			</Layout>
		);
	}
}

export default App;
