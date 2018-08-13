import './StartPage.css';

import React, { Component } from 'react';

import Stage from './Stage/Stage';
import Grid from './Grid/Grid';

class StartPage extends Component {
	render() {
		return (
			<React.Fragment>
				<Stage />
				<Grid />
			</React.Fragment>
		);
	}
}

export default StartPage;
