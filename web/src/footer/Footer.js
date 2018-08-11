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

const ContentTeser = (titel, text) => (
	<Card title={titel} style={{ height: '35vh' }}>
		<p style={{ overflowY: 'scroll', height: '100%' }}>{text}</p>
	</Card>
);

class ContentGrid extends Component {
	render() {
		return (
			<React.Fragment>
				<Row style={rowStyle}>
					<Col sm={24} md={18} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
				</Row>
				<Row style={rowStyle}>
					<Col sm={24} md={18} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
				</Row>
				<Row style={rowStyle}>
					<Col sm={24} md={18} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
				</Row>
				<Row style={rowStyle}>
					<Col sm={24} md={18} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
					<Col sm={24} md={6} style={colStyle}>
						<ContentTeser titel={'Title'} text={'Blablablablabal'} />
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default ContentGrid;
