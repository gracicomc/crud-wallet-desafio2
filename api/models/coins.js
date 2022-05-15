'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Coins extends Model {
        static associate(models) {
            Coins.belongsTo(models.Wallets, {
                foreignKey: 'WalletCoins',
            });
            Coins.hasMany(models.Transactions, {
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
        },

        {
            sequelize,
            modelName: 'Coins',
        }
    );
    return Coins;
};
