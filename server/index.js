const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');
require('dotenv').config();

const app = express();
const port = 3000;

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/orders', async (req, res) => {
    const { amount, currency, receipt } = req.body;
    try {
        const response = await razorpay.orders.create({ amount, currency });
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
            receipt: response.receipt,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
