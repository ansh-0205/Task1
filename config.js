const { Sequelize , DataTypes } = require('sequelize');
const dotenv = require('dotenv').config();
const sequelize = new Sequelize(process.env.dbName,process.env.dbPath,process.env.dbPassword,{
    host:process.env.dbHost,
    port:process.env.dbPort,
    dialect:process.env.dbDialect
});

try{
    sequelize.authenticate();
    console.log('Connected to the DataBase ');
}catch(err){
    console.log(err);
}

// const db={};
// db.Sequelize=Sequelize;
// db.sequelize=sequelize;

// db.sequelize.sync()
//     .then(()=>{
//         console.log('Re-Sync');
//     })

// db.users = require('./models/users')(sequelize,DataTypes);
// db.userVehicle = require('./models/userVehicle')(sequelize,DataTypes);
// db.log = require('./models/log')(sequelize,DataTypes);
// db.parkingSpot = require('./models/parkingSpot')(sequelize,DataTypes);


module.exports = sequelize;