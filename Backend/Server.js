import express from 'express';
import config from './config';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose'
import userRoute from './Router/UserRoute'
import productRoute from './Router/ProductRoute'
import bodyParser from 'body-parser'
import Product from './Models/ProductModel'
import User from './Models/UserModel'
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error));

const app = express();
// app.use(cors())
app.use(bodyParser.json())
app.use(express.static('uploads'))
//127.0.0.1:27017











app.use("/api/user",userRoute);
app.use("/api/products",productRoute);
// app.get("/api/products/:id",(req,res) => {
//     const productId = req.params.id;
//     const product= data.products.find(x=> x.id===productId);
//     if(product)
//         res.send(product)
//     else
//         res.status(404).send({msg:"product not found"})
// });

// app.get("/api/products",(req,res) => {
//     res.send(data.products)
// });

// app.get("/api/users/createAdmin",(req,res) => {
//     res.send(data.products)
// });



// app.get("/api/users/createAdmin",async(req,res) => {
//     try {
//         const user = new User({
//             name: 'shweta',
//             email: 'abcde@gmail.com',
//             mobNo: 123456799,
//             password: '1234567',
//             isAdmin: true
//         });
//         const newUser = await user.save();
//         res.send(newUser);

//     } catch (error) {
//         res.send({msg:error.message})
//     }
// })
// app.get("/vegetables", async (req, res) => {
//     const product = await Product.findOne({ category: "veg"});
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: "Product Not Found." });
//     }
//   });







app.listen(5000,() => {console.log("server is started at port 5000")})
