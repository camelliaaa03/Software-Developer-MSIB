const authJwt = require('../middleware/authJwt');
const db = require('../models');
const Category = db.categories;
const Op = db.Sequelize.Op;

exports.create =  (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Name can not be empty',
        });
        return;
    }

    const category = {
        name: req.body.name,
    };
    // const userId = req.user.id;

    Category.create(category)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the category.',
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ?
        {
            name: {
                [Op.iLike]: `%${name}%`,
            },
        } :
        null;

    Category.findAll({
            where: condition,
        })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message ||
                    'some error occured while retrieving categories',
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Category.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: `Error when retrieving Category with id=${id}`,
            });
        });
};

exports.update = (authJwt.isAdmin, async (req, res) => {
    const id = req.params.id;

    Category.update(req.body, {
            where: {
                id: id,
            },
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Category was updated successfully.',
                });
            } else {
                res.send({
                    message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Category with id=${id}`,
            });
        });
});

exports.delete = (authJwt.isAdmin, async (req, res) => {
    const id = req.params.id;

    Category.destroy({
            where: {
                id: id,
            },
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Category was deleted successfully!',
                });
            } else {
                res.send({
                    message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Category with id=${id}`,
            });
        });
});
