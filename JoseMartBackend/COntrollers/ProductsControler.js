const ProductsController = {
    getCategory: async (req, res) => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories');
            if (!response.ok) {
                return res.status(400).send({ message: 'Category fetching error', error: response.statusText });
            }

            const categories = await response.json();
            res.status(200).send({ allCategories: categories });
        } catch (error) {
          
            res.status(500).send({ message: 'Server error', error });
        }
    },
    getAllProducts:async(req,res)=>{
        try{
            const allProducts = await fetch('https://dummyjson.com/products');
            if (!allProducts.ok) {
                return res.status(400).send({ message: 'Category fetching error', error: response.statusText });
            }

            const alproducts= await allProducts.json();
            res.status(200).send({ alproducts });

        }catch(er){throw er}

    },
    getSingleProduct:async(req,res)=>{
        const productid = req.params.id;
        try{
        const product= await fetch(`https://dummyjson.com/products/${productid}`);
        if(!product){
            res.status(400).send({message:"Product fetching eror"})
        }else{
            const prodct = await product.json();
            res.status(201).send({product:prodct})
        }
        }catch(er){throw er}
    }

};

module.exports = ProductsController