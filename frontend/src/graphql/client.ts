import { ApolloClient, InMemoryCache } from "@apollo/client";
// const uri = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;