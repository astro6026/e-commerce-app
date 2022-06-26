const { ApolloServer, gql } = require("apollo-server");
// array can have null values if we just use [String], so use [String!] -> to not allow nullable values in the array, but we can stil return null
// [String!]! -> to not allow null returned from the hello array.
const typeDefs = gql`
 type Query {
    hello: [String!]!,
 }
 `

 const resolvers = {
    Query: {
       hello: () => ["hello", "this ",1, "an ", "arrya", "of ", "strings"],
       //hello: () => null,
    }
 }

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=> {
    console.log("Server is ready at " + url);
})

