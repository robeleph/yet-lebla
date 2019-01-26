const express = require("express");

const authRouter = require('./auth');
const userRouter = require('./api');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/', userRouter);

router.use('*', (req, res) => {
    res.json({
        success: false,
        message: 'the path does not exist'
    });
})

module.exports = router;