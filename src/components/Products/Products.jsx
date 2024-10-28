import React from "react";
import "./Products.css";

const Products = (props) => {
    
  return <div>
    <h1>Product Name :{props.product.name} </h1>
    <h3>Product price :{props.product.price} </h3>
    <button onClick={props.alert}>Alert Button</button>
  </div>;
};

export default Products;
