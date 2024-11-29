import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Product from './Product';
function ProductDetails(){
    const url_api = "https://fakestoreapi.com/products";
    const params = useParams();
    const [product , setProduct] = useState({});
    useEffect(()=>{
        fetch(`${url_api}/${params.productId}`)
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    } , []);
    return(
        <div>
            <Product product={product}/>
        </div>
    );
}
export default ProductDetails;