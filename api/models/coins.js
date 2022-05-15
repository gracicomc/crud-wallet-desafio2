'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Coins extends Model {
        static associate(models) {
            Coins.hasMany(models.Wallets, {
                constraints: true,
                foreignKey: 'WalletCoins',
            });

            Coins.belongsTo(models.Transactions, {
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
        },
        {
            sequelize,
            modelName: 'Coins',
        }
    );
    return Coins;
};
