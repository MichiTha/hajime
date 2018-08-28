import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Card } from 'antd';

import { getEvent } from '../../Utils/calendar';

type Props = {};

type State = {
	event?: Object
};

class Event extends Component<Props, Stat> {
	state = {
		event: null
	};

	componentDidMount = async () => {
		const { match } = this.props;
		const { params } = match;
		const { id } = params;
		const event = await getEvent(id);
		this.setState({ event });
	};

	render() {
		const { event } = this.state;
		console.log('event: ', event);
		const { summary, start, end, location } = event || {};
		return (
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<Card
					title={summary}
					style={{
						margin: '5px',
						boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)',
						maxWidth: '1200px',
						minHeight: '80vh',
						overflow: 'hidden'
					}}
				>
					<div>
						{start && <p>{`von ${start.dateTime}`}</p>}
						{end && <p>{`bis ${end.dateTime}`}</p>}
						{location && <p>{`${location}`}</p>}
					</div>
				</Card>
			</div>
		);
	}
}

export default Event;
