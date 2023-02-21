import React from 'react'
import RedLabel from '../Images/RedLabel.jpg'
import GS7914 from '../Images/GS7914-1.jpg'
import SNEAKER from '../Images/SNEAKER SS-2151.jpg'
import weinbrenner from '../Images/weinbrenner.jpg'
import { Link } from "react-router-dom";

const ProductIndexes = () => {

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
    }

    return (
        <div>
            <h2>HELLO</h2>
            <ul>
                {Object.entries(shoes).map(([id, { Name, image }]) => {
                    return (
                        <li key={id}>
                        <Link to={id}>
                            {Name} <br/>
                            <img src={image} alt={Name} width={"50%"} height={"500vh"}></img>
                        </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default ProductIndexes