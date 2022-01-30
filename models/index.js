// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category)
// getter is product.getCategory()


// Categories have many Products
Category.hasMany(Product)
// getter will be category.getProducts()


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });
// getter will be product.getTags()


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });
// getter will be tag.getProducts()

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
