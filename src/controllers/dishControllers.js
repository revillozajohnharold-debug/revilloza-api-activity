const Dish = require ('../models/dishModel');

const getAllDishes = async (req,res) => {
    try{
        const dishes = await Dish.find();
        res.status (200).json(dishes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//2


const createDish = async (req,res) => {
    try{
        const newDish = await Dish.create(req.body);
        res.status (201).json(newDish);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//3


const getDishById = async (req,res) => {
    try{
        const dish = await Dish.findById(req.params.id);
        if (!dish) return res.status(404).json({message: 'Dish not Found'});
        res.status (200).json(dish);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//4


const updateDish = async (req,res) => {
    try{
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!dish) return res.status(404).json({message: 'Dish not Found'});
        res.status (200).json(dish);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//5


const deleteDish = async (req,res) => {
    try{
        const dish = await Dish.findByIdAndDelete(req.params.id,);
        if (!dish) return res.status(404).json({message: 'Dish not Found'});
        res.status (200).json({message:'Dish deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAllDishes,
    createDish,
    getDishById,
    updateDish,
    deleteDish,
};