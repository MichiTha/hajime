import { initGoogleApi } from './google';

const JUDO_CALENDAR_ID = 'n0rit1d06te4ruqdj63j66vs6o@group.calendar.google.com';

const getCalendarEvents = async (calendarId = JUDO_CALENDAR_ID) => {
	await initGoogleApi();

	const { result } = await window.gapi.client.calendar.events.list({
		calendarId: JUDO_CALENDAR_ID,
		timeMin: new Date().toISOString(),
		showDeleted: false,
		singleEvents: true,
		maxResults: 10,
		orderBy: 'startTime'
	});

	const { items: events } = result;

	return events;
};

export const getEvent = async (eventId, calendarId = JUDO_CALENDAR_ID) => {
	await initGoogleApi();
	const { result } = await window.gapi.client.calendar.events.get({
		calendarId: JUDO_CALENDAR_ID,
		eventId: eventId
	});
	return result;
};

export const formatDate = dateString => {
	const date = new Date(dateString);
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export const getEventsPerDay = async () => {
	const events = await getCalendarEvents();
	let days = {};
	events.forEach(event => {
		const start = new Date(event.start.dateTime);
		const day = formatDate(start);
		if (days[day]) {
			days[day].push(event);
		} else {
			days[day] = [event];
		}
	});
	return Object.keys(days).map(key => ({ day: key, events: days[key] }));
};
