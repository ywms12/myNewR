import { Link } from "react-router-dom";

function Product(props) {
    const {product} = props;
    return (
        <div>
            <div className="card">
                <img src={product.image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.category}</p>
                    <p className="card-text">{product.price}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
}
export default Product;