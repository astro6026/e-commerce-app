const { products, categories } = require("../db")
module.exports.Query = {
    products: () =>products,
    product: (parent, args, context) => {
        // console.log(parent, args, context);
        const itemId = args.id
        return products.find(item => item.id === args.id) || []
    },
    categories: () => categories,
    category: (parent, args, context) => {
        const categoryId = args.id
        return categories?.find(category => category.id === categoryId) || []
    },
}