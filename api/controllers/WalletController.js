const database = require('../models');

class WalletController {
    //Create Wallet
    static async postWallet(req, res) {
        const newWallet = req.body;
        try {
            const newCreatedWallet = await database.Wallets.create(newWallet);
            return res.status(201).json(newCreatedWallet);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    //Get all Wallets
    static async getAllWallets(req, res) {
        try {
            const allWallets = await database.Wallets.findAll({
                include: [database.Coins, database.Transactions],
            });
            return res.status(200).json(allWallets);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    //Get Wallets by Address
    static async getByAdress(req, res) {
        const { address } = req.params;
        try {
            const idWallet = await database.Wallets.findOne({
                where: { address: Number(address) },
                include: [database.Coins, database.Transactions],
            });
            return res.status(200).json(idWallet);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }

    //Update infos of some wallet
    static async updateWallet(req, res) {
        const { address } = req.params;
        const newInfos = req.body;
        try {
            await database.Wallets.update(newInfos, {
                where: { address: Number(address) },
            });
            const updatedWallet = await database.Wallets.findOne({
                where: { address: Number(address) },
                include: [database.Coins, database.Transactions],
            });
            return res.status(200).json(updatedWallet);
        } catch (err) {
            return res.status(404).json(err.message);
        }
    }
}

module.exports = WalletController;
