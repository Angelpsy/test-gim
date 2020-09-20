import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

export const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: 'http://homework.nextbil.com/graphql'
    }),
    cache: new InMemoryCache()
})