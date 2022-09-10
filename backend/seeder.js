import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/user'
import products from './data/products'
import User from './models/userModel'
import Product from './models/productModel'
import Order from './models/oderModel'
import connectDB from './config/db'

dotenv.config()

connectDB()

const importData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        // await User.insertMany(users)

        const createdUsers = await User.insertMany(users)
        const adminUser= createdUsers[0]._id
        const sampleProducts = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    }catch(error){
        console.error
    }
}