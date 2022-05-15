'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Transactions', {
            idTransactions: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            CoinTransaction: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Coins', key: 'idCoin' },
            },

            value: {
                type: Sequelize.DOUBLE,
            },
            datetime: {
                type: Sequelize.DATE,
            },
            sendTo: {
                type: Sequelize.INTEGER,
            },
            receiveFrom: {
                type: Sequelize.INTEGER,
            },
            currentCotation: {
                type: Sequelize.DOUBLE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Transactions');
    },
};
