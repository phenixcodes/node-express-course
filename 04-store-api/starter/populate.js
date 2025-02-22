require('dotenv').config()

const connectdb = require('./db/connect.js');
const Product = require('./models/product.js');

const jsonProducts = require('./products.json');

const start = async () => { 
    try {
        //connectDB
        await connectdb(process.env.MONGO_URI);
        //await Product.deleteMany();
        await Product.create(jsonProducts)
        console.log('Success!!!')
        process.exit(0)
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}

start();