import express from 'express';
import Product from '../Models/ProductModel';
import { isAuth, isAdmin } from '../utils';
const router = express.Router();
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })


// router.use(express.static(__dirname+"/food/public/"))
// const storage = multer.diskStorage({
//   destination: function(req,file,cb){
//     cb(null, './uploads');
//   },
//   filename: function(req,file,cb){
//     cb(null,new Date().toISOString() + file.originalname)
//   }
// })
// const upload = multer({storage:storage});




router.get("/", async (req, res) => {
    const category = req.query.category ? { category: req.query.category } : {};
    const searchKeyword = req.query.searchKeyword ? {
      name: {
        $regex: req.query.searchKeyword,
        $options: 'i'
      }
    } : {};
    const sortOrder = req.query.sortOrder ?
      (req.query.sortOrder === 'lowest' ? { price: 1 } : { price: -1 })
      :
      { _id: -1 };
    const products = await Product.find({ ...category, ...searchKeyword }).sort(sortOrder);
    res.send(products);
  });

router.get("/", async(req,res) => {
    const products = await Product.find({});
    res.send(products);
})

router.get("/vegetable", async(req,res) => {
  const products = await Product.find({category:'vegetable'});
  res.send(products);
})


router.get("/fruits", async(req,res) => {
  const products = await Product.find({category:"fruit"});
  res.send(products);
})


router.post("/",isAuth, isAdmin,async (req, res) => {
    console.log(req.file)
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });
    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: ' Error in Creating Product.' });
})
  

router.put("/:id", isAuth, isAdmin, async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findOne({_id:productId});
    if(product){
        product.name= req.body.name;
            product.price= req.body.price;
            product.image= req.body.image;
            product.category= req.body.category;
            product.countInStock= req.body.countInStock;
            product.rating= req.body.rating
            product.numReviews= req.body.numReviews;
            const updatedProduct = await product.save();
        if (updatedProduct) {
        return res.status(200).send({ message: 'Product Updated', data: updatedProduct });
        }
    }
    return res.status(500).send({ message: ' Error in Updating Product.' });
})

router.delete("/:id",isAuth, isAdmin, async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
      await deletedProduct.remove();
      res.send({ message: "Product Deleted" });
    } else {
      res.send("Error in Deletion.");
    }
});

router.get("/:id", async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found." });
    }
  });

  export default router;