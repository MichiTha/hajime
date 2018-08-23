import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';

import { client } from './Client/Client';

type Props = {
	children: React.Node | Array<React.Node>
};

const Provider = (props: Props) => (
	<ApolloProvider client={client}>
		<Router>{props.children}</Router>
	</ApolloProvider>
);

export default Provider;
