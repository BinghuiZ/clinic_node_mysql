var express = require('express');
var router = express.Router();

const { register } = require('../controllers/indexController')


router.post('/register', register)

module.exports = router;
