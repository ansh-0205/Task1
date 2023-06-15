// module.exports = (sequelize,DataTypes)=>{
//         const User = sequelize.define("User",{
//         name:{
//             type:DataTypes.STRING,
//         },
//         mobileNumber:{
//             type:DataTypes.STRING,
//             unique:'true'
//         },
//         password:{
//             type:DataTypes.STRING
//         }

//     },{
//         timestamps: false
//     });
//     return User;
// }
const Sequelize = require('sequelize');
const db = require('../config');
        const User = db.define("User",{
        name:{
            type:Sequelize.STRING,
        },
        mobileNumber:{
            type:Sequelize.STRING,
            unique:'true'
        },
        password:{
            type:Sequelize.STRING
        }

    },{
        timestamps: false
    });

module.exports = User