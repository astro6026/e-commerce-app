const { ApolloServer, gql } = require("apollo-server");
// product - 
const typeDefs = gql`
 type Query {
    products: [Product!]!,
 }

 type Product {
    name: String!,
    description: String!,
    quantity: Int!,
    price: Float!,
    onSale: Boolean!,
 }
 `

 const resolvers = {
    Query: {
      products: ()=> {
        return ([{
            name: "Bike",
            description: "Mountain Bike",
            quantity: 4,
            onSale: false,
            price: 124.23,
        }])
      }
    }
 }

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=> {
    console.log("Server is ready at " + url);
})

