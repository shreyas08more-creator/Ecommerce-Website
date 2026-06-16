import { useState } from "react";
import { supabase } from "../Supabase";
import "./AddP.css"
export function AddP() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    async function AddProduct() {
        await supabase.from("Product").insert({ Name:name, Price:price, Image:image })
        alert("Product Added");


    }
    return (
        <>
        <div className="add-product-container">
            <div className="label-section">
                <label>Name:</label>
                <label>Price:</label>
                <label>Image:</label>
            </div>
            <div className="input-section">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="action-button">
                <button className="submit-btn" onClick={AddProduct}>Add Product</button>
            </div>
        </div>
          
        </>
    )
}