const {addProduct, getProduct, updateProduct, deletedPoduct} = require("../controller/product")
const express = require('express')

const router = new express.Router();

router.post("/create-product" , addProduct)
router.get("/get-product" ,getProduct )
router.put("/edit-product", updateProduct)
router.delete("/delete-product", deletedPoduct)
module.exports= router
