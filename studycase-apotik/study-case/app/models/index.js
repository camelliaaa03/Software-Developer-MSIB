const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require("./category.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);

db.user = require("../models/user.model")(sequelize, Sequelize);
db.role = require("../models/role.model")(sequelize, Sequelize);

db.cart = require("../models/cart.model")(sequelize, Sequelize);
db.order = require("../models/order.model")(sequelize, Sequelize);

db.categories.hasMany(db.products);

db.products.belongsTo(db.categories, {
    foreignKey: "categoryId",
    as: "category",
});

db.cart.belongsTo(db.products, {
    foreignKey: "productId",
});

db.order.hasMany(db.products, {
    foreignKey: "orderId",
});

// db.order.belongsTo(db.cart,{
//     foreignKey: "orderId",
// });

// db.user.hasMany(db.order, {
//     foreignKey: "userId",
// });

db.role.belongsToMany(db.user, {
    through : "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["admin", "kasir"]

module.exports = db;