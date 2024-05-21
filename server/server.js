const express = require('express');
const cors = require('cors');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/vans', require('./routes/vanRoutes'));
app.use('/api/host', require('./routes/hostRoutes'));

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});