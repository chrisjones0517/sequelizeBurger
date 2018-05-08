'use strict';
module.exports = (sequelize, DataTypes) => {
    var Customer = sequelize.define('customer', {
        name: {
            type: DataTypes.STRING,
        },
        burgers_eaten: {
            type: DataTypes.STRING
        },
        burgers_created: DataTypes.STRING,
        'createdAt': {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
        'updatedAt': {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        }
    }, {});
    Customer.associate = function (models) {
        // associations can be defined here
    };
    return Customer;
};

