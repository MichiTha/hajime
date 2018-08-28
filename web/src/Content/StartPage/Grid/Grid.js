import './Grid.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Row, Col } from 'antd';

const { Meta } = Card;

const ContentTeaser = ({ titel, titleImage, text, categories, date }) => {
	const description =
		date +
		' | ' +
		categories
			.reduce((acc, categorie) => `${acc}${categorie.name} | `, '')
			.slice(0, -3);

	return titleImage ? (
		<Card
			hoverable
			style={{
				height: '300px',
				margin: '5px',
				borderRadius: '20px',
				boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)'
			}}
			cover={
				<div
					style={{
						height: '200px',
						overflow: 'hidden',
						borderRadius: '20px 20px 0px 0px',
						borderStyle: 'solid',
						borderColor: '#95989a',
						borderWidth: '0px 0px 2px 0px'
					}}
				>
					<img
						style={{
							width: '100%'
						}}
						src={titleImage}
					/>
				</div>
			}
		>
			<Meta title={titel} description={description} />
		</Card>
	) : (
		<Card
			hoverable
			style={{
				height: '300px',
				margin: '5px',
				borderRadius: '20px',
				boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)'
			}}
			cover={
				<div
					style={{
						borderStyle: 'solid',
						borderColor: '#95989a',
						borderWidth: '0px 0px 2px 0px',
						padding: '24px',
						zoom: 1
					}}
				>
					<Meta title={titel} description={description} />
				</div>
			}
		>
			<div
				style={{
					overflow: 'hidden',
					height: '150px'
				}}
			>
				{text}
			</div>
		</Card>
	);
};

type Props = {
	contentPosts: {
		id: string,
		title: string,
		titleImage: string,
		content: string,
		categories: Array<{
			name: string
		}>
	}
};

class Grid extends Component {
	render() {
		const { contentPosts } = this.props;
		return (
			<Row>
				{contentPosts.map(
					({ id, title, titleImage, categories, text, date }) => (
						<Col sm={24} md={8} key={id}>
							<Link to={`post/${id}`}>
								<ContentTeaser
									titel={title}
									titleImage={titleImage}
									text={text}
									date={date}
									categories={categories}
								/>
							</Link>
						</Col>
					)
				)}
			</Row>
		);
	}
}

export default Grid;
