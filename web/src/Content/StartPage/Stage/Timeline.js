import React, { Component } from 'react';
import { Card, Timeline } from 'antd';
import { Row, Col } from 'antd';
import { getEvents } from './Ical';

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
		const events = await getEvents();
		this.setState({ events });
	};

	render() {
		const { events } = this.state;
		return (
			<Card title="Nächste Termine" style={{ height: '35vh' }}>
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
