'use strict';
module.exports = (sequelize, DataTypes) => {
    var Customer = sequelize.define('customer', {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 50],
                    msg: " "
                }
            }
        },
        burgers_eaten: {
            type: DataTypes.STRING
        },
        burgers_created: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 50],
                    msg: " "
                }
            }
        },
        'createdAt': {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        },
        'updatedAt': {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        }
    },
        {});
    Customer.associate = function (models) {
        Customer.hasMany(models.burger);
        // associations can be defined here
    };
    return Customer;
};

