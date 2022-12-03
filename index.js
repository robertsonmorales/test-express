require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "It works on API"
    });
});

app.get('/api/data', (req, res) => {
    res.json({
        name: "robert",
        job: "Web developer"
    });
});

app.listen(process.env.PORT, () => console.log('Working on port ' + process.env.PORT));

module.exports = app;