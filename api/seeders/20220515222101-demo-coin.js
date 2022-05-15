module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Coins',
            [
                {
                    coin: 'ETH',
                    fullname: 'Etherium',
                    amont: 5.53,
                    WalletCoins: 1,
                },
                {
                    coin: 'BTC',
                    fullname: 'Bitcoin',
                    amont: 0.00938,
                    WalletCoins: 1,
                },
                {
                    coin: 'BRL',
                    fullname: 'Real',
                    amont: 123.0,
                    WalletCoins: 1,
                },
                {
                    coin: 'ETH',
                    fullname: 'Etherium',
                    amont: 15.83,
                    WalletCoins: 2,
                },
                {
                    coin: 'BTC',
                    fullname: 'Bitcoin',
                    amont: 0.00983,
                    WalletCoins: 2,
                },
                {
                    coin: 'BRL',
                    fullname: 'Real',
                    amont: 20.0,
                    WalletCoins: 2,
                },
                {
                    coin: 'ETH',
                    fullname: 'Etherium',
                    amont: 98.53,
                    WalletCoins: 3,
                },
                {
                    coin: 'BTC',
                    fullname: 'Bitcoin',
                    amont: 1.0,
                    WalletCoins: 3,
                },
                {
                    coin: 'BRL',
                    fullname: 'Real',
                    amont: 23142.0,
                    WalletCoins: 3,
                },
                {
                    coin: 'ETH',
                    fullname: 'Etherium',
                    amont: 23.009,
                    WalletCoins: 4,
                },
                {
                    coin: 'BTC',
                    fullname: 'Bitcoin',
                    amont: 0.1238,
                    WalletCoins: 4,
                },
                {
                    coin: 'BRL',
                    fullname: 'Real',
                    amont: 12331.0,
                    WalletCoins: 4,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Coins', null, {});
    },
};
