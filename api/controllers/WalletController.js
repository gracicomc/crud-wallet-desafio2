const database = require('../models');

class WalletController {
    static async postWallet(req, res) {
        const newWallet = req.body;
        try {
            const newCreatedWallet = await database.Wallets.create(newWallet);
            return res.status(201).json(newCreatedWallet);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async getAllWallets(req, res) {
        try {
            const allWallets = await database.Wallets.findAll();
            return res.status(200).json(allWallets);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = WalletController;
