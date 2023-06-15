// module.exports = (sequelize,DataTypes)=>{
//         const Log = sequelize.define("Log",{
//     checkIn:DataTypes.STRING,
//     checkOut:DataTypes.STRING,
//     duration:DataTypes.STRING
// },{
//     timestamps: false,
// });
// return Log;
// }
const Sequelize = require('sequelize');
const db = require('../config');
        const Log = db.define("Log",{
    checkIn:Sequelize.STRING,
    checkOut:Sequelize.STRING,
    duration:Sequelize.STRING
},{
    timestamps: false,
});

module.exports = Log