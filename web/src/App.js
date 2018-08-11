import './App.css';

import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import Stage from './stage/Stage';
import ContentGrid from './contentGrid/ContentGrid';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Stage />
				<ContentGrid />
			</div>
		);
	}
}

export default App;
