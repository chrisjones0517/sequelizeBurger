const express = require('express');
const db = require("../models");
const router = express.Router();
let errors = [];

router.get('/', (req, res) => {
    db.burger.findAll({
        order: [
            ['burger_name', 'ASC']
        ]
    })
        .then((data) => {
            let dataObject = {
                burgers: data,
                errors: errors
            };
            
            res.render('index', dataObject);
            errors = [];
        });
});

router.post('/', (req, res) => {
    errors = [];
    db.burger.create({
        burger_name: req.body.burgerInput,
        createdBy: req.body.nameInput,
    })
        .catch(err => {
            if (err) {
                errors.push(err.errors[0].message);
            }
        })
        .then(() => {
            db.customer.create({
                name: req.body.nameInput,
                burgers_created: req.body.burgerInput
            }).catch(err => {
                if (err) {
                    errors.push(err.errors[0].message);
                }
            });
        })
        .then(() => {
            res.redirect('/');
        });
});

router.put('/:id', (req, res) => {

    db.burger.update({
        devoured: true,
        eatenBy: req.body.name
    }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            db.burger.findAll({
                where: {
                    id: req.params.id
                }
            }).then((data) => {
                console.log(data[0].dataValues);
                db.customer.update({
                    burgers_eaten: data[0].dataValues.burger_name
                }, {
                        where: {
                            name: req.body.name
                        }
                    });
            })
        })
        .then(() => {
            res.redirect('/');
        });

});

module.exports = router;



