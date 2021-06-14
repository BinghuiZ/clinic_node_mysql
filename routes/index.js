var express = require('express');
var router = express.Router();

const { register, login, addRecord, listRecords } = require('../controllers/indexController');
const { authCheck } = require('../Utils/authCheck');


router.post('/register', register)
router.post('/login', login)

router.use(authCheck)

router.post('/add', addRecord)
router.get('/list', listRecords)

module.exports = router;
