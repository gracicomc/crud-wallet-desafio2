'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Coins extends Model {
        static associate(models) {
            Coins.belongsTo(models.Wallets, {
                constraints: true,
                foreignKey: 'WalletCoins',
            });
            Coins.hasMany(models.Transactions, {
                constraints: true,
                foreignKey: 'CoinTransaction',
            });
        }
    }
    Coins.init(
        {
            idCoin: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },

            coin: DataTypes.STRING,
            fullname: DataTypes.STRING,
            amount: DataTypes.FLOAT,
            CoinTransaction: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: { model: 'Transactions', key: 'idTransactions' },
            },
        },

        {
            sequelize,
            modelName: 'Coins',
        }
    );
    return Coins;
};
