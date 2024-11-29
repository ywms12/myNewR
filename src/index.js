import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './UseContext/Usecont';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

);
/*<React.StrictMode>
    <App />
  </React.StrictMode>*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*
{
  "products": [
    {
      "id": "1",
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery"
    },
    {
      "id": "2",
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery"
    },
    {
      "id": "3",
      "title": "John Hardy Women's Legends ",
      "price": 837,
      "description": "Satisfaction Guaranteed. rom our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery"
    }
  ]
}
*/
reportWebVitals();
