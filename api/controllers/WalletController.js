const database = require('../models');

class WalletController {
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
