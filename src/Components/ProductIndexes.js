import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";


const ProductIndexes = () => {

    const {shoes} = useContext(GlobalContext);


    return (
        <div>
            <h2>HELLO</h2>
            <ul>
                {Object.entries(shoes).map(([id, { Name, image }]) => {
                    return (
                        <li key={id}>
                        <Link to={`/products/${id}`}>
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