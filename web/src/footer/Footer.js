import './Footer.css';

import React, { Component } from 'react';
import { Card } from 'antd';
import { Layout, Row, Col, Divider, Icon } from 'antd';

const footerListStyle = {
	listStyle: 'none',
	textAlign: 'left',
	textTransform: 'uppercase',
	lineHeight: '2',
	fontSize: 16
};

const footerTextStyle = {
	color: 'rgb(255, 255, 255)'
};

class Footer extends Component {
	render() {
		return (
			<Layout.Footer>
				<footer>
					<Row>
						<Col sm={24} md={24}>
							<ul style={footerListStyle}>
								<a>
									<li style={footerTextStyle}>Kontakt</li>
								</a>
								<a>
									<li style={footerTextStyle}>Impressum</li>
								</a>
								<a>
									<li style={footerTextStyle}>Datenschutz</li>
								</a>
							</ul>
						</Col>
					</Row>
					<Divider />
					<Row>
						<Col sm={12} style={{ display: 'flex' }}>
							<div className="Logo-blue" />
						</Col>
						<Col
							sm={12}
							style={{ display: 'flex', justifyContent: 'flex-end' }}
						>
							<Icon
								style={{
									fontSize: 60,
									color: '#FFF',
									marginTop: 10,
									marginBottom: 10,
									cursor: 'pointer'
								}}
								onClick={() => window.scrollTo(0, 0)}
								type="up-circle-o"
							/>
						</Col>
					</Row>
				</footer>
			</Layout.Footer>
		);
	}
}

export default Footer;
