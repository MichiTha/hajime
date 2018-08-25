import React, { Component } from 'react';
import { Carousel, Card, Row, Col } from 'antd';

import StageTeaser from './StageTeaser';
import Timeline from './Timeline';
import Categories from './Categories';

type Props = {
	stagePost: {
		title: string,
		titleImage: string,
		content: string
	},
	categories: Array<{
		id: string,
		categoryId: number,
		name: string,
		count: number
	}>,
	setCategoryFilter: (Array<number>) => void,
	categoryFilter: Array<number>
};

class Stage extends Component<Props, void> {
	render() {
		const {
			stagePost,
			categories,
			setCategoryFilter,
			categoryFilter
		} = this.props;
		return (
			<Row>
				<Col sm={24} md={16}>
					<StageTeaser stagePost={stagePost} />
				</Col>
				<Col sm={24} md={8}>
					<Timeline />
					<Categories
						categories={categories}
						setCategoryFilter={setCategoryFilter}
						categoryFilter={categoryFilter}
					/>
				</Col>
			</Row>
		);
	}
}

export default Stage;
