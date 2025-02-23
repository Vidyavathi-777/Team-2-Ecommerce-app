const prisma = require('../../prisma/prismaClient');

const getAllProducts = async() =>{
    return await prisma.product.findMany()
}

module.exports ={getAllProducts}