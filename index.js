const { ApolloServer } = require("apollo-server");
// const { products: items } = require("./src/db.js");
const { typeDefs } = require("./src/schema")
const { Category } = require("./src/resolvers/Category")
const { Product } = require("./src/resolvers/Product")
const { Query } = require("./src/resolvers/Query")

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
    }
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
})

