 const express = require('express');
const app = express();

app.get('/webhook', (req, res) => {
    const VERIFY_TOKEN = "123456";

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

app.listen(3000, () => console.log('Server is running'));
