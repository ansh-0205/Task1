const express = require('express');
const router = express.Router();

const{
    userRegister,
    userLogin,
    // oneToManyUser,
    // oneToOneLog,
    // oneToOneLogUserVehicle,
    // oneToOneLogParkingSpot
} = require('../controllers/user');

router.get('/register',userRegister);
router.get('/login',userLogin);
// router.get('/oneToMany',oneToManyUser);
// router.get('/oneToOneLog',oneToOneLog);
// router.get('/oneToOneLogUserVehicle',oneToOneLogUserVehicle);
// router.get('/oneToOneLogParkingSpot',oneToOneLogParkingSpot);
module.exports = router;
