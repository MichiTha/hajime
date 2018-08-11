import React, { Component } from 'react';
import { Card } from 'antd';
import { Row, Col } from 'antd';

const rowStyle = {
	padding: 0,
	row: 0
};

const colStyle = {
	padding: 0,
	row: 0
};

const ContentTeaser = ({ titel, text }) => (
	<Card title={titel} style={{ height: '35vh' }}>
		<p style={{ overflowY: 'scroll', height: '100%' }}>{text}</p>
	</Card>
);

class ContentGrid extends Component {
	render() {
		return (
			<Row style={rowStyle}>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
				<Col sm={24} md={8} style={colStyle}>
					<ContentTeaser titel={'Title'} text={'Blablablablabal'} />
				</Col>
			</Row>
		);
	}
}

export default ContentGrid;
