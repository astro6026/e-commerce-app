const { gql } = require("apollo-server");
exports.typeDefs = gql`
type Query {
   products: [Product!]!,
   product(id: ID!): Product,
   categories: [Category!]!,
   category(id: ID!): Category,
}

type Category {
   id: ID!,
   name: String!
   products: [Product!]!,
}

type Product {
   name: String!,
   description: String!,
   quantity: Int!,
   price: Float!,
   onSale: Boolean!,
   image: String!,
   categoryId: ID!,
   id: ID!,
   category: Category,
}
`