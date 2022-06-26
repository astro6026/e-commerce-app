const { categories } = require("../db")
exports.Product = {
    category: (parent, args, context) => {
        // console.log(parent, args, context, x);
        return categories.find(category => category.id === parent.categoryId)

    }
}