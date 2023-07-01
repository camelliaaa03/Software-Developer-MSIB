module.exports = (sequelize, Sequelize) => {
    const Cart = sequelize.define('Cart', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });

    return Cart;
}