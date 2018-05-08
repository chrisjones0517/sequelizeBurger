'use strict';
module.exports = (sequelize, DataTypes) => {
    var Burger = sequelize.define('burger', {
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 50],
                    msg: "You must provide a burger name with at least 3 characters!"
                }
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdBy: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 50],
                    msg: "You must provide a name with at least 3 characters!"
                }
            }
        },
        eatenBy: DataTypes.STRING
    }, {});
    Burger.associate = function (models) {
        // associations can be defined here
    };
    return Burger;
};

