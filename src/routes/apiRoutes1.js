/*const express = require('express');
const router = express.Router();
// Import controllers here...
const { protect, authorize } = require('../middleware/authMiddleware');

// ANYONE can get chefs
router.get('/', getAllChefs);

// ONLY Admins and Managers can create chefs
router.post('/', protect, authorize('admin', 'manager'), createChef);

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
*/