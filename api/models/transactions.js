'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transactions extends Model {
        static associate(models) {
            Transactions.hasMany(models.Coins, {
                constraints: true,
                foreignKey: 'CoinTransaction',
            });
        }
    }
    Transactions.init(
        {
            idTransaction: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            value: DataTypes.DOUBLE,
            datetime: DataTypes.DATE,
            sendTo: DataTypes.INTEGER,
            receiveFrom: DataTypes.INTEGER,
            currentCotation: DataTypes.DOUBLE,
        },
        {
            sequelize,
            modelName: 'Transactions',
        }
    );
    return Transactions;
};
