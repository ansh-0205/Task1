// module.exports = (sequelize , DataTypes) => {
//         const UserVehicle = sequelize.define("UserVehicle",{
//         vehicleNumber:{
//             type:DataTypes.STRING
//         },
//         userId:{
//             type:DataTypes.INTEGER
//         }
//     },{
//         timestamps: false
//     });
//     return UserVehicle;
// }
const Sequelize = require('sequelize');
const db = require('../config');
        const UserVehicle = db.define("UserVehicle",{
        vehicleNumber:{
            type:Sequelize.STRING
        },
        userId:{
            type:Sequelize.INTEGER
        }
    },{
        timestamps: false
    });

module.exports = UserVehicle