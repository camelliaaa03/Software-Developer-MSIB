module.exports = app => {
    var router = require('express').Router();

    const db = require('../models');
    const Cart = db.cart;

    router.get('/', async (req, res) => {
        try{
            const cart = await Cart.findAll({

            });

            if (!cart){
                return res.status(404).json({ message : 'Cart not found' });
            }
            res.json(cart);
        } catch (err) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    });

    router.post('/', async (req, res) => {
        let { productId, quantity, name, price } = req.body;

        const existingCart = await Cart.findOne({
            where: { productId }
        });

        const data = {
            productId: productId,
            quantity: quantity,
            name: name,
            price: price,
        };

        if (existingCart) {
            existingCart.quantity += quantity;
            await existingCart.save();
        } else {
            Cart.create(data)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log("err :", err);
                res.status(500).json({ message: 'internal server error', error: err.message });
            })
        }
        res.status(201).json({ message: 'Product added to Cart' });
    });

    router.delete('/:id', async (req, res) => {
        const {id} = req.params;

        try {
            const cart = await Cart.findByPk(id);
            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }

            cart.quantity -= 1;

            if (cart.quantity <= 0) {
                await cart.destroy();
            } else {
                await cart.save();
            }
            res.json({ message: 'Quantity updated' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    });

    router.delete('/', async (req, res) => {
        try {
            await Cart.destroy({ where: {} });

            res.json({ message : 'All Cart items deleted' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    });

    app.use('/api/cart', router);
};