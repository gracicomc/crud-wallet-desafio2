'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Coins', {
            idCoin: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            WalletCoins: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Wallets', key: 'address' },
            },
            coin: {
                type: Sequelize.STRING,
            },
            fullname: {
                type: Sequelize.STRING,
            },
            amount: {
                type: Sequelize.DOUBLE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Coins');
    },
};
