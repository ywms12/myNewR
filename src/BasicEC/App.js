import './style.css';
import Navbar from './Navbar';
import Slider from './Slider';
import ProductsList from './ProductsList';
import { Routes , Route } from 'react-router-dom';
import About from './About';
import ProductDetails from './ProductDetails';
function App(){
    return(
        <div className="app">
            <Navbar/>
            <Slider/>
            <ProductsList/>
            <br/>
            <hr/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="product/:productId" element={<ProductDetails/>}/>
            </Routes>
        </div>
    );
}
export default App;