'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Wallets extends Model {
        static associate(models) {
            Wallets.hasMany(models.Coins, {
                foreignKey: 'WalletCoins',
            });
            Wallets.hasMany(models.Transactions, {
                foreignKey: 'CoinTransaction',
            });
        }
    }
    Wallets.init(
        {
            address: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "This field can't be empty",
                    },
                    len: {
                        args: [7, 200],
                        msg: 'This field must have at least 7 characters',
                    },
                },
            },
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: {
                        msg: "This field can't be empty",
                    },
                    is: {
                        args: [/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/i],
                        msg: 'Invalid CPF format, or this cpf already exist',
                    },
                },
            },

            birthdate: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "This field can't be empty",
                    },
                    isBefore: {
                        args: ['2003-12-31'],
                        msg: 'You must have at least 18 years',
                    },
                },
            },
        },

        {
            sequelize,
            modelName: 'Wallets',
        }
    );
    return Wallets;
};
