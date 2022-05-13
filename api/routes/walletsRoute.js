const { Router } = require('express');
const WalletController = require('../controllers/WalletController');

const router = Router();

router.get('/wallets', WalletController.getAllWallets);

module.exports = router;
