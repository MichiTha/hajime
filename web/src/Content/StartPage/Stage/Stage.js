import React, { Component } from 'react';
import { Carousel, Calendar, Card } from 'antd';
import { Row, Col } from 'antd';

import Timeline from './Side/Timeline';

import example from './example.jpeg';

const Image = ({ src }) => (
	<div
		style={{
			width: '100%',
			height: '70vh',
			overflow: 'hidden'
		}}
	>
		<img
			src={src}
			style={{
				minWidth: '100%',
				minHeight: '70vh'
			}}
		/>
	</div>
);

const onPanelChange = (value, mode) => console.log(value, mode);

const rowStyle = {
	padding: 0,
	row: 0
};

const colStyle = {
	padding: 0,
	row: 0
};

class Stage extends Component {
	render() {
		return (
			<Row gutter={24} style={rowStyle}>
				<Col sm={24} md={18} style={colStyle}>
					<Image src={example} />
				</Col>
				<Col sm={24} md={6} style={colStyle}>
					<Timeline />
					<Calendar
						style={{ height: '35vh' }}
						fullscreen={false}
						onPanelChange={onPanelChange}
					/>
				</Col>
			</Row>
		);
	}
}

export default Stage;
