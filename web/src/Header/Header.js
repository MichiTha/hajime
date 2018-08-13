import './Header.css';

import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

class Header extends Component {
	render() {
		return (
			<Layout.Header>
				<div className="Logo-blue" />
				<Menu
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '80px' }}
				>
					<Menu.Item key="1">Neuigkeiten</Menu.Item>
					<Menu.Item key="2">Termine</Menu.Item>
					<Menu.SubMenu key="3" title="Informationen" className="Menu-item">
						<Menu.Item>Termine</Menu.Item>
						<Menu.Item>Orte</Menu.Item>
					</Menu.SubMenu>
					<Menu.Item key="4" style={{ float: 'right' }}>
						<span>
							<Icon type="team" />
							Kontakt
						</span>
					</Menu.Item>
					<Menu.Item key="5" style={{ float: 'right' }}>
						<span>
							<Icon type="search" />
							Suche
						</span>
					</Menu.Item>
				</Menu>
			</Layout.Header>
		);
	}
}

export default Header;
