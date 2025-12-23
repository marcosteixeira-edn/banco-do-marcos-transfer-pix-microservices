const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/api/transfer', (req, res) => {
    const { key, amount } = req.body;

    if (!key || !amount) {
        return res.status(400).json({ error: 'Missing key or amount' });
    }

    if (amount <= 0) {
        return res.status(400).json({ error: 'Amount must be positive' });
    }

    // Simulate transfer processing
    console.log(`Processing transfer: Key=${key}, Amount=${amount}`);
    
    // Success response
    setTimeout(() => {
        res.status(200).json({
            message: 'Transfer successful',
            transactionId: Math.random().toString(36).substring(7),
            timestamp: new Date().toISOString()
        });
    }, 1000); // Simulate network delay
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
