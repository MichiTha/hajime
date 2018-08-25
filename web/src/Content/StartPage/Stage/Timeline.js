import React, { Component } from 'react';
import { Card, Timeline } from 'antd';
import { Row, Col } from 'antd';

import { getCalendarEvents } from '../../../Utils/calendar';

type State = {
	events: Array<Object>
};

const TimeSlot = ({ begin, summary }) => {
	const minutes = begin.getMinutes();
	const hours = begin.getHours();
	const day = begin.getDate();
	const month = begin.getMonth() + 1;
	const year = begin.getFullYear();
	return (
		<Timeline.Item
		>{`${day}.${month}.${year} ${hours}:${minutes} - ${summary}`}</Timeline.Item>
	);
};

class SideTimeline extends Component<void, Stat> {
	state = {
		events: []
	};

	componentDidMount = async () => {
		const calendarEvents = await getCalendarEvents();
		console.log('events: ', calendarEvents);
		const events = calendarEvents.map(event => ({
			...event,
			begin: new Date(event.start.dateTime)
		}));
		this.setState({ events });
	};

	render() {
		const { events } = this.state;
		return (
			<Card
				title="Termine"
				style={{
					borderRadius: '20px',
					margin: '5px',
					boxShadow: '0 2px 4px 0 rgba(0,0,0,.5)',
					height: 'calc(65vh - 382px * 0.65)'
				}}
			>
				<Timeline>
					{events.map(({ begin, summary }, index) => (
						<TimeSlot
							key={`time-slot-${index}`}
							begin={begin}
							summary={summary}
						/>
					))}
				</Timeline>
			</Card>
		);
	}
}

export default SideTimeline;
