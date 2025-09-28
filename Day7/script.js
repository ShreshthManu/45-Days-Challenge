
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'API is running!' });
});

app.get('/', (req, res) => {
    res.send("<h1>Hello From Script, TO Visit App you should visit route </h1><h1>/api</h1>")
    });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});