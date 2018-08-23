import React, { Component } from 'react';
import { Carousel, Calendar, Card } from 'antd';
import { Row, Col } from 'antd';

import Timeline from './Side/Timeline';
import StageTeaser from './StageTeaser';

const onPanelChange = (value, mode) => console.log(value, mode);

const rowStyle = {
	padding: 0,
	row: 0
};

const colStyle = {
	padding: 0,
	row: 0
};

type Props = {
	stagePost: {
		title: string,
		titleImage: string,
		content: string
	}
};

class Stage extends Component<Props, void> {
	render() {
		const { stagePost } = this.props;
		return (
			<Row gutter={24} style={rowStyle}>
				<Col sm={24} md={18} style={colStyle}>
					<StageTeaser stagePost={stagePost} />
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
