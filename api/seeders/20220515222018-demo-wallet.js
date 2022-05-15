module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Wallets',
            [
                {
                    name: 'Carla Guimarães',
                    cpf: '019.239.314-89',
                    birthdate: '2002-04-19',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Marcos Silva',
                    cpf: '245.634.328-45',
                    birthdate: '1998-06-23',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Daniel Souza',
                    cpf: '523.124.876-00',
                    birthdate: '1990-03-11',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'David Lima',
                    cpf: '523.145.643-09',
                    birthdate: '2002-09-10',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Wallets', null, {});
    },
};
