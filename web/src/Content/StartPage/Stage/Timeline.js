import './Timeline.css';

import React, { Component } from 'react';
import { Card, Timeline } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { getEventsPerDay } from '../../../Utils/calendar';

type State = {
	days: Array<Object>
};

const TimeSlot = ({ day }) => {
	console.log('day: ', day);
	const { events } = day;
	return (
		<Timeline.Item>
			<p>{day.day}</p>
			{events.map((event, index) => {
				console.log('event: ', event);

				const { summary, location, start, id } = event;
				const begin = new Date(start.dateTime);
				let minutes = begin.getMinutes();
				if (minutes < 10) {
					minutes = `0${minutes}`;
				}
				let hours = begin.getHours();
				if (hours < 10) {
					hours = `0${hours}`;
				}
				const day = begin.getDate();
				const month = begin.getMonth() + 1;
				const year = begin.getFullYear();
				return (
					<Link to={`termin/${id}`} key={`event_${id}`}>
						<p>{`${hours}:${minutes} ${summary}`}</p>{' '}
					</Link>
				);
			})}
		</Timeline.Item>
	);
};

class SideTimeline extends Component<void, Stat> {
	state = {
		days: []
	};

	componentDidMount = async () => {
		const days = await getEventsPerDay();
		console.log('days:', days);
		this.setState({ days });
	};

	render() {
		const { days } = this.state;
		return (
			<Card
				title="Termine"
				style={{
					borderRadius: '20px',
					margin: '5px',
					boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)',
					height: 'calc(65vh - 382px * 0.65)',
					overflow: 'hidden'
				}}
				bodyStyle={{
					overflow: 'scroll',
					padding: '10px',
					height: '100%'
				}}
			>
				<div className="Timeline-Container">
					<Timeline>
						{days.map((day, index) => (
							<TimeSlot key={`time-slot-${index}`} day={day} />
						))}
					</Timeline>
				</div>
			</Card>
		);
	}
}

export default SideTimeline;
