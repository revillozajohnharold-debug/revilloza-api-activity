const chef = require ('../models/chefModel');

const getAllChefs = async (req,res) => {
    try{
        const chefs = await chef.find();
        res.status (200).json(chefs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//2


const createChef = async (req,res) => {
    try{
        const newChef = await chef.create(req.body);
        res.status (201).json(newChef);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//3


const getChefById = async (req,res) => {
    try{
        const chefById = await chef.findById(req.params.id);
        if (!chefById) return res.status(404).json({message: 'Chef not Found'});
        res.status (200).json(chefById);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//4


const updateChef = async (req,res) => {
    try{
        const chef = await chef.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!chef) return res.status(404).json({message: 'Chef not Found'});
        res.status (200).json(chef);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//5


const deleteChef = async (req,res) => {
    try{
        const chef = await chef.findByIdAndDelete(req.params.id,);
        if (!chef) return res.status(404).json({message: 'Chef not Found'});
        res.status (200).json({message:'Chef deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAllChefs,
    createChef,
    getChefById,
    updateChef,
    deleteChef,
};