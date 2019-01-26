const express = require("express");
const jwt = require('jsonwebtoken');
const authManager = require('../../services/auth');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        success: false,
        reason: 'use POST request instead'
    });
});

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    authManager.login({
        'username': username,
        'password': password
    }).then(data => {
        res.json({
            success: true,
            token: data
        });
    }).catch(err => {
        res.json({
            success: false,
            reason: err
        });
    });
});

module.exports = router;