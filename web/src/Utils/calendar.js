const GOOGLE_API_CLIENT = 'https://apis.google.com/js/api.js';
const loadGoogleAPIScript = () =>
	new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = GOOGLE_API_CLIENT;
		script.onload = () => resolve();
		script.onerror = () => reject();
		document.head.appendChild(script);
	});

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
const GOOGLE_API_KEY = 'AIzaSyBGdykDa4XVSIPbLCpQ9nUCG4GYiBjv9PM';
const GOOGLE_CLIENT_ID =
	'563596061435-eae3l65294sedqcjpduj6574r07o39cj.apps.googleusercontent.com';
const GOOGLE_DISCOVERY_DOCS = [
	'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
];
const GOOGLE_SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const { gapi } = global;
const loadGoolgeAPIClient = () =>
	new Promise((resolve, reject) => {
		window.gapi.load('client:auth2', async () => {
			await window.gapi.client.init({
				apiKey: GOOGLE_API_KEY,
				clientId: GOOGLE_CLIENT_ID,
				discoveryDocs: GOOGLE_DISCOVERY_DOCS,
				scope: GOOGLE_SCOPES
			});
			resolve();
		});
	});

const initGoogleApi = async () => {
	await loadGoogleAPIScript();
	await loadGoolgeAPIClient();
};

const JUDO_CALENDAR_ID = 'n0rit1d06te4ruqdj63j66vs6o@group.calendar.google.com';
export const getCalendarEvents = async (calendarId = JUDO_CALENDAR_ID) => {
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
