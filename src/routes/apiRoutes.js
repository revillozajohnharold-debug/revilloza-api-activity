const express = require('express');
const router = express.Router();
// Import controllers here...
const { protect, authorize } = require('../middleware/authMiddleware');





const {
     getAllDishes,
        createDish,
        getDishById,
        updateDish,
        deleteDish,
} = require('../controllers/dishControllers');


router.get('/dishes',getAllDishes);

router.post('/dishes', protect, authorize('admin', 'manager'), createDish);

router.get('/dishes/:id',getDishById);

router.put('/dishes/:id',updateDish);

router.delete('/dishes/:id',deleteDish);

console.log("Routes have been initialized!"); 
   

module.exports = router;