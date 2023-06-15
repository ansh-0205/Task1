// const db = require('../config');


// db.users.hasMany(db.userVehicle,{foreignKey:'userId'});
// db.userVehicle.belongsTo(db.users,{foreignKey:'userId'});

// db.users.hasOne(db.log,{foreignKey:'userId'});
// db.log.belongsTo(db.users,{foreignKey:'userId'});

// db.userVehicle.hasOne(db.log,{foreignKey:'userVehicleId'});
// db.log.belongsTo(db.userVehicle,{foreignKey:'userVehicleId'});

// db.parkingSpot.hasOne(db.log,{foreignKey:'parkingSpotId'});
// db.log.belongsTo(db.parkingSpot,{foreignKey:'parkingSpotId'});
const db = require('../config');
const Models = require('./models');

exports.modelRelationship = async() =>{
    Models.user.hasMany(Models.userVehicle,{foreignKey:'userId'});
Models.userVehicle.belongsTo(Models.user,{foreignKey:'userId'});
db.sync()
    .then(()=>{
        console.log('Re-Sync');
    })
}
