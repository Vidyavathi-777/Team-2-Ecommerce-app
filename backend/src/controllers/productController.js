const prisma = require('../../prisma/prismaClient')
const productService = require('../services/productServices')

const getAllProducts = async(req,res) =>{
    try{
        const products = await productService.getAllProducts()
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({ error: error.message });

    }
}

module.exports = {getAllProducts}