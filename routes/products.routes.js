import express from "express";
// • GET /products — return a hardcoded array of 3 products
// • GET /products/:id — return one product by id
// • POST /products — log the body to console and respond with 201 Created

const router = express.Router();
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
];

router.get('/products', (req, res) => {

    res.json(products);
});

router.get('/products/:id', (req, res) => {
    try {
        const { id } = req.params;

        // for (const product of products) {
        //     if (product.id == id) {
        //         return res.json(product);
        //     }
        // }

        const product = products.find(
            p => p.id == id
        )

        if (!product) {
            return res.status(400).json({message:"json not found"});
        }else{
            return res.json(product);
        }
    }
    catch (err) {
        res.send(err);
    }
})

export default router;