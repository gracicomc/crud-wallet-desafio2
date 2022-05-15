const { Router } = require('express');
const { route } = require('express/lib/application');
const WalletController = require('../controllers/WalletController');

const router = Router();

router.post('/api/v1/wallet', WalletController.postWallet);
router.get('/api/v1/wallets', WalletController.getAllWallets);
router.get('/api/v1/wallets/:address', WalletController.getByAdress);

module.exports = router;
