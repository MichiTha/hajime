import './App.css';

import React, { Component } from 'react';
import { Layout } from 'antd';

import Provider from './Provider';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

class App extends Component {
	render() {
		return (
			<Provider>
				<Layout className="App">
					<Footer />
					<Header />
					<Content />
					<div
						style={{
							height: '290px'
						}}
					/>
				</Layout>
			</Provider>
		);
	}
}

export default App;
