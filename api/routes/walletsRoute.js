const { Router } = require('express');
const { route } = require('express/lib/application');
const WalletController = require('../controllers/WalletController');

const router = Router();

router.post('/wallet', WalletController.postWallet);
router.get('/wallets', WalletController.getAllWallets);

module.exports = router;
