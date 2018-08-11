import React, { Component } from 'react';
import { Carousel, Calendar, Card, Timeline } from 'antd';
import { Row, Col } from 'antd';

import example1 from './example1.jpeg';
import example2 from './example2.jpg';
import example3 from './example3.jpg';
import example4 from './example4.jpg';

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
					<Carousel autplay>
						<Image src={example1} />
						<Image src={example2} />
						<Image src={example3} />
						<Image src={example4} />
					</Carousel>
				</Col>
				<Col sm={24} md={6} style={colStyle}>
					<Card title="Nächste Termine" style={{ height: '35vh' }}>
						<p style={{ overflowY: 'scroll', height: '100%' }}>
							<Timeline>
								<Timeline.Item>step1 2015-09-01</Timeline.Item>
								<Timeline.Item>step2 2015-09-01</Timeline.Item>
								<Timeline.Item>step3 2015-09-01</Timeline.Item>
								<Timeline.Item>step4 2015-09-01</Timeline.Item>
								<Timeline.Item>step4 2015-09-01</Timeline.Item>
							</Timeline>
						</p>
					</Card>
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
