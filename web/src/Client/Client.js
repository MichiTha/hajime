import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
	uri: 'http://judoverein-ammerland-muensing.de/graphql'
});
