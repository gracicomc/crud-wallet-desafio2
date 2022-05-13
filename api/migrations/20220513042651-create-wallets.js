const moment = require('moment');
const dateNow = moment().format('L');

('use strict');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Wallets', {
            address: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
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
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notEmpty: {
                        msg: "This field can't be empty",
                    },
                    is: /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
                },
            },
            birthdate: {
                type: Sequelize.DATEONLY,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "This field can't be empty",
                    },
                    isBefore: `${dateNow}`,
                },
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
        await queryInterface.dropTable('Wallets');
    },
};
