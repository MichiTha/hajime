import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://judoverein-ammerland-muensing.de/graphql'
	}),
	cache: new InMemoryCache()
});
