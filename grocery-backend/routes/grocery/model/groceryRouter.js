const express = require("express");

const {
    getAllGroceries,
    createGrocery,
    updateGroceryById,
    deleteGroceryById,
} = require("../controller/groceryController");
const { default: Grocery } = require("../grocery");

const router = express.Router();

const {
    getAllGroceries,
    createGrocery,
    updateGroceryById,
    deleteGroceryById,
} = require("./controller/groceryController");

router.get("/", function(req, res, next) {
    res.json(true);
});

router.get("/get-all-groceries", function (req, res, next) {
    try {
        let foundAllGroceries = await getAllGroceries();
        res.json({ message: "Successfully found", foundAllGroceries});
    } catch (e) {
        res.status(500).json({ message: e.message, error: e });
    }
});

router.post("/create-grocery", createGrocery (req, res, next) {
    console.log(req.body);
    
    try {
        let createGrocery = new groceryItem({
            grocery: req.body.grocery
        }),
        let savedGroceryItem = groceryItem.save();
        
        res.json({ payload: savedGroceryItem }),
    } catch (e) {
        res.status(500).json({ message: e.message, error: e });
    }
});

router.put("/update-grocery-by-id/:id", updateGroceryById (req, res, next) {
    try {
        let updatedGroceryItem = await grocery.findByIdAndUpdate(
            req.params.id ),
            req.body,
            { new: true }
        }
        res.json({ payload: updatedGroceryItem })
    } catch (e) {
        res.status(500).json({ message: e.message, error: e });
    }
    );
    
    router.delete("/delete-grocery-by-id/:id", deleteGroceryById (req, res, next) {
        try {
            let deletedGroceryItem = await grocery.findByIdAndRemove(req.params.id)
            res.json({ payload: deletedGroceryItem });
        } catch (e) {
            res.status(500).json({ message: e.message, error: e });
        }
    });
    
    module.exports = {
        getAllGroceries,
        createGrocery,
        updateGroceryById,
        deleteGroceryById,
    };