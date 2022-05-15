module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Transactions',
            [
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 4,
                    receiveFrom: 5,
                    currentCotation: 123.41231,
                    CoinTransaction: 1,
                },
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 4,
                    receiveFrom: 5,
                    currentCotation: 0.329381,
                    CoinTransaction: 1,
                },
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 1,
                    receiveFrom: 3,
                    currentCotation: 41321.412,
                    CoinTransaction: 2,
                },
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 2,
                    receiveFrom: 4,
                    currentCotation: 1241.2313,
                    CoinTransaction: 2,
                },
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 4,
                    receiveFrom: 5,
                    currentCotation: 0.124312,
                    CoinTransaction: 3,
                },
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 2,
                    receiveFrom: 1,
                    currentCotation: 2314.09,
                    CoinTransaction: 3,
                },
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 4,
                    receiveFrom: 5,
                    currentCotation: 134.09,
                    CoinTransaction: 4,
                },
                {
                    value: 12431,
                    datetime: new Date(),
                    sendTo: 4,
                    receiveFrom: 5,
                    currentCotation: 0.1434,
                    CoinTransaction: 4,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Transactions', null, {});
    },
};
