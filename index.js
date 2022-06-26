const { ApolloServer, gql } = require("apollo-server");
// String, Int, Float, Boolean, ID!
const typeDefs = gql`
 type Query {
    hello: String!,
    numberOfAnimals: Int, // can return null in absence of the value
    price: Float,
    isCool: Boolean,
 }
 `

 const resolvers = {
    Query: {
        hello: () => {
            return null
        },
        numberOfAnimals: () => {
            return 31242;
        },
        price: ()=> 123.231,
        isCool: () => false,
    }
 }

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=> {
    console.log("Server is ready at " + url);
})

