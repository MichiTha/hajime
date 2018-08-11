import React, { Component } from 'react';
import { Menu } from 'antd';
import logo from './jvam-logo-optimal.png';

const menuItemStyle = {
	display: 'flex',
	justifyContent: 'center',
	height: 80,
	flexDirection: 'column'
};

class Navigation extends Component {
	render() {
		return (
			<Menu mode="horizontal" defaultSelectedKeys={['0']}>
				<Menu.Item location="center" style={menuItemStyle}>
					<img
						src={logo}
						style={{ height: 60, marginTop: 10, marginBottom: 10 }}
					/>
				</Menu.Item>
				<Menu.Item style={menuItemStyle}>Training</Menu.Item>
				<Menu.Item style={menuItemStyle}>Kontakt</Menu.Item>
				<Menu.SubMenu title="Infos" style={menuItemStyle}>
					<Menu.Item>Termine</Menu.Item>
					<Menu.Item>Orte</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		);
	}
}

export default Navigation;
