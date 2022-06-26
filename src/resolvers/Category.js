const { products: items } = require("../db")
module.exports.Category = {
    products: (parent, args, context) => {
        return items.filter(item => item.categoryId === parent.id)
        //  console.log(parent, args, context, x);
    }
}