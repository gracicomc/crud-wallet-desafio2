const bodyParser = require('body-parser');
const wallets = require('./walletsRoute');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(wallets);
    app.get('/', (req, res) => res.send('test'));
};
