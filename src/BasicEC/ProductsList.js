import { useEffect, useState } from 'react';
import Product from './Product';
import './ProductsList.css';
function ProductsList() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setPrducts] = useState([]);
    useEffect(() => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setPrducts(data));
    }, []);
    return (
        <div>
            <h3 className="fh3">Our Products</h3>
            <div className="container">
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-md-3" key={product.id}>
                                <Product product={product}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default ProductsList;