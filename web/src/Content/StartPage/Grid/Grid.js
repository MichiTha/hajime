import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Row, Col } from 'antd';

const { Meta } = Card;

const rowStyle = {
	padding: 0,
	row: 0
};

const colStyle = {
	padding: 0,
	row: 0
};

const ContentTeaser = ({ titel, titleImage, text }) =>
	titleImage ? (
		<Card
			hoverable
			style={{ height: '300px' }}
			cover={
				<div
					style={{
						height: '200px',
						overflow: 'hidden'
					}}
				>
					<img
						style={{
							width: '100%'
						}}
						src={titleImage}
					/>{' '}
				</div>
			}
		>
			<Meta title={titel} />
		</Card>
	) : (
		<Card hoverable style={{ height: '300px' }}>
			<Meta title={titel} />
			<p
				style={{ overflowY: 'scroll', height: '100%' }}
				dangerouslySetInnerHTML={{ __html: text }}
			/>
		</Card>
	);

type Props = {
	contentPosts: {
		id: string,
		title: string,
		titleImage: string,
		content: string
	}
};

class Grid extends Component {
	render() {
		const { contentPosts } = this.props;
		return (
			<Row style={rowStyle}>
				{contentPosts.map(({ id, title, titleImage, text }) => (
					<Col sm={24} md={8} style={colStyle} key={id}>
						<Link to={`post/${id}`}>
							<ContentTeaser
								titel={title}
								titleImage={titleImage}
								text={text}
							/>
						</Link>
					</Col>
				))}
			</Row>
		);
	}
}

export default Grid;
