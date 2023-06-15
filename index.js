const express = require('express');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());

const userRoutes = require('./routes/user');
const vehicleRoutes = require('./routes/vehicle');


const { Sequelize } = require('sequelize');
require('./config');

app.use('/user',userRoutes);
app.use('/vehicle',vehicleRoutes);

require('./utils/relation').modelRelationship();
const port = process.env.PORT || 8082;

app.listen(port , () => {
    console.log(`Server on port ${port}`);
});