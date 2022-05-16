# 💱 Crypto Wallet CRUD

## This is a API REST CRUD of a simple Crypto Wallet using Sequelize ORM with Node.js, express and MySQL.

## 👩‍💻 Graciela Parente

### Node version

```
v14.18.0
```

### npm version

```
6.14.15
```

## The entire application is contained within the `api` folder.

#

### First install dependencies

    npm install

### Run server

    npm run start

### Seed database

    npx sequelize-cli db:seed:all

# REST API

## Get list all Wallets

### Request

`GET Wallets`

    http://localhost:3000/api/v1/wallets

### Response

    Status: 200 OK
    [
    {
        "address": 1,
        "name": "Carla Guimarães",
        "cpf": "019.239.314-89",
        "birthdate": "2002-04-19",
        "createdAt": "2022-05-15T22:49:00.000Z",
        "updatedAt": "2022-05-15T22:49:00.000Z",
        "Coins": [
            {
                "idCoin": 3,
                "coin": "BRL",
                "fullname": "Real",
                "amont": 123,
                "WalletCoins": 1
            },
            {
                "idCoin": 2,
                "coin": "BTC",
                "fullname": "Bitcoin",
                "amont": 0.00938,
                "WalletCoins": 1
            },
            {
                "idCoin": 1,
                "coin": "ETH",
                "fullname": "Etherium",
                "amont": 5.53,
                "WalletCoins": 1
            }
        ],
        "Transactions": [
            {
                "idTransactions": 2,
                "value": 12431,
                "datetime": "2022-05-15T22:49:00.000Z",
                "sendTo": 4,
                "receiveFrom": 5,
                "currentCotation": 0.329381,
                "CoinTransaction": 1
            },
            {
                "idTransactions": 1,
                "value": 12431,
                "datetime": "2022-05-15T22:49:00.000Z",
                "sendTo": 4,
                "receiveFrom": 5,
                "currentCotation": 123.41231,
                "CoinTransaction": 1
            }
        ]
    },
    ]

    500

    internal server error

## Create a new Wallet

### Request

`POST Wallet`

    http://localhost:3000/api/v1/wallet

### Response

    Status: 201 created
    {
    "address": 6,
    "name": "Daniel Souza",
    "cpf": "082.324.312-32",
    "birthdate": "1998-09-12",
    "updatedAt": "2022-05-15T22:29:12.695Z",
    "createdAt": "2022-05-15T22:29:12.695Z"
    }

    500
    internal server error

## Get a specific Wallet

### Request

`GET Wallet by Address`

    localhost:3000/api/v1/wallets/2

### Response

    Status: 200 OK
    {
    "address": 2,
    "name": "Marcos Silva",
    "cpf": "245.634.328-45",
    "birthdate": "1998-06-23",
    "createdAt": "2022-05-15T22:49:00.000Z",
    "updatedAt": "2022-05-15T22:49:00.000Z",
    "Coins": [
        {
            "idCoin": 4,
            "coin": "ETH",
            "fullname": "Etherium",
            "amont": 15.83,
            "WalletCoins": 2
        },
        {
            "idCoin": 5,
            "coin": "BTC",
            "fullname": "Bitcoin",
            "amont": 0.00983,
            "WalletCoins": 2
        },
        {
            "idCoin": 6,
            "coin": "BRL",
            "fullname": "Real",
            "amont": 20,
            "WalletCoins": 2
        }
    ],
    "Transactions": [
        {
            "idTransactions": 3,
            "value": 12431,
            "datetime": "2022-05-15T22:49:00.000Z",
            "sendTo": 1,
            "receiveFrom": 3,
            "currentCotation": 41321.412,
            "CoinTransaction": 2
        },
        {
            "idTransactions": 4,
            "value": 12431,
            "datetime": "2022-05-15T22:49:00.000Z",
            "sendTo": 2,
            "receiveFrom": 4,
            "currentCotation": 1241.2313,
            "CoinTransaction": 2
        }
    ]

}

## Change a Wallet state

### Request

`Update Wallet's Infos`

    localhost:3000/api/v1/wallets/2

### Response

    Status: 200 OK
    {
    "address": 2,
    "name": "Carla Braga",
    "cpf": "245.634.328-45",
    "birthdate": "1998-06-23",
    "createdAt": "2022-05-16T00:48:23.000Z",
    "updatedAt": "2022-05-16T00:56:20.000Z",
    "Coins": [
        {
            "idCoin": 4,
            "coin": "ETH",
            "fullname": "Etherium",
            "amont": 15.83,
            "WalletCoins": 2
        },
        {
            "idCoin": 5,
            "coin": "BTC",
            "fullname": "Bitcoin",
            "amont": 0.00983,
            "WalletCoins": 2
        },
        {
            "idCoin": 6,
            "coin": "BRL",
            "fullname": "Real",
            "amont": 20,
            "WalletCoins": 2
        }
    ],
    "Transactions": [
        {
            "idTransactions": 3,
            "value": 12431,
            "datetime": "2022-05-16T00:48:23.000Z",
            "sendTo": 1,
            "receiveFrom": 3,
            "currentCotation": 41321.412,
            "CoinTransaction": 2
        },
        {
            "idTransactions": 4,
            "value": 12431,
            "datetime": "2022-05-16T00:48:23.000Z",
            "sendTo": 2,
            "receiveFrom": 4,
            "currentCotation": 1241.2313,
            "CoinTransaction": 2
        }
    ]

}

## Delete a Wallet

### Request

`DELETE Wallet`

    localhost:3000/api/v1/wallets/1

### Response

THIS METHOD IS CURRENTLY NOT WORKING YET :(
