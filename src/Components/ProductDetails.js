import React from 'react'
import RedLabel from '../Images/RedLabel.jpg'
import GS7914 from '../Images/GS7914-1.jpg'
import SNEAKER from '../Images/SNEAKER SS-2151.jpg'
import weinbrenner from '../Images/weinbrenner.jpg'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const shoes = {
    'shoe1': {
      Name: "RedLabel",
      image: RedLabel
    },
    'shoe2': {
      Name: "GS7914-1",
      image: GS7914
    },
    'shoe3': {
      Name: "SNEAKER",
      image: SNEAKER
    },
    'shoe4': {
      Name: "weinbrenner",
      image: weinbrenner
    }
  };


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