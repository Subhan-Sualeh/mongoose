const Product = require("../modal/product")

const ObjectId = require('mongoose').Types.ObjectId; 

const addProduct = async (req, res) => {
    const {name, description, price, quantity} = req.body
    try {
        let product = new Product({
           name,
            description,
            price, 
            quantity ,
            ...req.body
        })

        product = await product.save()

        res.status(201).json({
            message:"data add success",
            product
        })
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}

const getProduct = async (req, res) => {

    try{
        
       const  product =await Product.find({

        })
        res.status(200).json({
            message:"get data success",
            product
        })

    } catch (error){
        res.status(500).json({
            message:error.message
        })
    }
    
}

const updateProduct = async(req, res) => {
    const {_id, ...rest} = req.body;
    try{
        const product = await Product.findOneAndUpdate({_id: new ObjectId(_id)},{...rest}, {new:true})
        res.status(201).json({
            message:"update data success",
            product
        })
    } catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

    const deletedPoduct = async(req, res) => {
        const { _id} = req.body
    try{
        const product =  await Product.findOne({
            _id:new ObjectId(_id)
        })
        product.remove()
        res.status(200).json({
            message:"deleted data success"
        })
    } catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

module.exports = {
    addProduct, getProduct, updateProduct, deletedPoduct
}