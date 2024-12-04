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
    }
};

module.exports = ProductsController