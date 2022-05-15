# 💱 Crypto Wallet CRUD

## This is a CRUD of a simple Crypto Wallet following REST API patterns, using ORM (sequelize) with Node.js, express and axios.

## 👩‍💻 Graciela Parente

### Node version

```
v14.18.0
```

### npm version

```
6.14.15
```

### The entire application is contained within the `api` folder.

### First install dependecies

    npm install

### Run server

    npm run start

### Seed database

    npx sequelize-cli db:seed:all

# REST API

## Get list of Things

### Request

`GET Wallets`

    http://localhost:3000/api/v1/wallets

### Response

    200
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

    []

## Create a new Thing

### Request

`POST Wallet`

    http://localhost:3000/api/v1/wallet

### Response

    201
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
