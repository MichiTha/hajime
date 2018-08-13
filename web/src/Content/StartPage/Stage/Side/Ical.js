import ical from 'ical';

const testData = [
	{
		begin: new Date(),
		location: 'Münsing',
		organizer: 'JVAM',
		summary: 'Training',
		description: 'Training'
	},
	{
		begin: new Date(),
		location: 'Münsing',
		organizer: 'JVAM',
		summary: 'Training',
		description: 'Training'
	}
];

export const getEvents = async () => {
	return testData;
};
