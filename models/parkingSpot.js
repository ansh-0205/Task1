// module.exports = (sequelize , DataTypes) =>{
//         const ParkingSpot = sequelize.define('ParkingSpot',{
//         name:DataTypes.STRING,
//         code: DataTypes.STRING,
//         address:DataTypes.STRING
//     },{
//         timestamps: false
//     });
//     return ParkingSpot;
// }
const Sequelize = require('sequelize');
const db = require('../config');
        const ParkingSpot = db.define('ParkingSpot',{
        name:Sequelize.STRING,
        code: Sequelize.STRING,
        address:Sequelize.STRING
    },{
        timestamps: false
    });

module.exports = ParkingSpot
