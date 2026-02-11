const express = require('express');
const router = express.Router();
const {
     getAllChefs,
        createChef,
        getChefById,
        updateChef,
        deleteChef,
} = require('../controllers/chefControllers');


router.get('/chefs',getAllChefs);

router.post('/chefs',createChef);

router.get('/chefs/:id',getChefById);

router.put('/chefs/:id',updateChef);

router.delete('/chefs/:id',deleteChef);

console.log("Routes have been initialized!"); 

   

module.exports = router;