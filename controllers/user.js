const sequelize = require('sequelize');
const db=require('../utils/models');
const User = db.user;
require('../utils/relation')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const userRegister = async(req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const register = await User.create({
            name:req.body.name,
            mobileNumber:req.body.mobileNumber,
            password:await bcrypt.hash(req.body.password,salt)
        });
        await register.save();
        res.status(200).json({message:'Success'});
    }catch(err){
        res.status(400).json(err);
        console.log(err)
    }
};

const userLogin = async(req,res) => {
    try{
        const data = await User.findOne({
            where:{
                name:req.body.name
            }
        });
        if(data){
            const password_valid = await bcrypt.compare(req.body.password,data.password);
            if(password_valid){
                const token = jwt.sign({name:data.name},process.env.SECRET);
                console.log(token);
                res.status(200).json({token: token});
            }else{
                res.status(400).json({message:'Incorrect password'});
            }
        }else{
            res.status(400).json({message:'Please register first'});
        }
    }catch(err){
        res.status(400).json(err);
    }
};

// const oneToManyUser = async(req,res) => {
//     try{
//         let data = await User.findAll({
//             include:[{
//                 model:db.userVehicle
//             }]
//         })
//         res.status(200).json(data);
//     }catch(err){
//         res.status(400).json(err);
//     }
// }
// const oneToOneLog = async(req,res) => {
//     try{
//         let data = await User.findAll({
//             include:[{
//                 model:db.log
//             }]
//         })
//         res.status(200).json(data);
//     }catch(err){
//         res.status(400).json(err);
//     }
// }
// const oneToOneLogParkingSpot = async(req,res) =>{
//     try{
//         let data = await db.parkingSpot.findAll({
//             include:[{
//                 model:db.log
//             }]
//         })
//         res.status(200).json(data);
//     }catch(err){
//         res.status(400).json(err);
//     }
// }
// const oneToOneLogUserVehicle = async(req,res) =>{
//     try{
//         let data = await db.userVehicle.findAll({
//             include:[{
//                 model:db.log
//             }]
//         })
//         res.status(200).json(data);
//     }catch(err){
//         res.status(400).json(err);
//     }
// }

module.exports={
    userRegister,
    userLogin,
    // oneToManyUser,
    // oneToOneLog,
    // oneToOneLogParkingSpot,
    // oneToOneLogUserVehicle
}