const express = require("express");
const jwt = require('jsonwebtoken');
const authManager = require('../../services/auth');
// require('dotenv').config();
const mongoose = require('mongoose');

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
    const email = req.body.email;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const recovery_question = req.body.recovery_question;
    const recovery_answer = req.body.recovery_answer;

    console.log(`${username} - ${password}`);

    authManager.register({
        'username': username,
        'password': password,
        'email': email,
        'firstname': firstname,
        'lastname': lastname,
        'recovery_question': recovery_question,
        'recovery_answer': recovery_answer
    }).then(() => {
        res.json({
            success: true,
            message: 'successfully registered on the system'
        });
    }).catch(err => {
        res.json({
            success: false,
            reason: err
        });
    });
});

module.exports = router;