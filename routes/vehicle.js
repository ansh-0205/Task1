const express = require('express');
const router = express.Router();

const{
    addVehicle,
    removeVehicle
} = require('../controllers/vehicle');

router.get('/addVehicle',addVehicle);
router.get('/removeVehicle',removeVehicle);

module.exports = router;