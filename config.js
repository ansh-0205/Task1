const { Sequelize , DataTypes } = require('sequelize');

const sequelize = new Sequelize('Task','root','',{
    host:'localhost',
    port:'3307',
    dialect:'mysql'
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