require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/api/data', (req, res) => {
    res.json({
        name: "robert",
        job: "Web developer"
    });
});

app.listen(process.env.PORT, () => console.log('Working on port ' + process.env.PORT));

module.exports = app;