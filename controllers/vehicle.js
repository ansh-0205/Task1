const sequelize = require('sequelize');
const models=require('../utils/models');
const UserVehicle = models.userVehicle;

require('../utils/relation');
const addVehicle = async(req,res) => {
    try{
        const data = await UserVehicle.create({
            vehicleNumber:req.body.vehicleNumber,
            userId:req.body.userId
        })
        console.log(data);
        await data.save();
        res.status(200).json({message:'Success'});
    }catch(err){
        res.status(400).json(err);
    }
}

const removeVehicle = async(req,res)=>{
    try{
        const data = await UserVehicle.destroy({
            where:{
                vehicleNumber:req.body.vehicleNumber
            }
        })
        console.log(data)
        res.status(200).json({message:'Success'});
    }catch(err){
        res.status(400).json(err);
    }
}

module.exports = {
    addVehicle,
    removeVehicle
}