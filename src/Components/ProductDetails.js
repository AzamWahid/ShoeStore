import React, { useContext } from "react";
import { useParams } from 'react-router-dom'
import { GlobalContext } from "../context/GlobalState";

const ProductDetails = () => {

  const {shoes} = useContext(GlobalContext);


  const { ProductID } = useParams();
  const product = shoes[ProductID];
  const { Name, image } = product;

  return (
    <div>

      <h1>Product Detail </h1>

      <h2>{Name}</h2>
      <img src={image} width={"50%"} alt={Name} height={"500vh"}/>




    </div>
  )
}

export default ProductDetails