import { useState } from "react";
import { supabase } from "../Supabase";
import "./AddP.css";

export function AddP() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    async function AddProduct() {
        await supabase
            .from("Product")
            .insert({ Name: name, Price: price, Image: image });

        alert("Product Added");
    }

    return (
        <div className="add-product-container">
            <div className="add-product-card">
                <h2>Add Product</h2>

                <div className="input-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Price</label>
                    <input
                        type="number"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        placeholder="Paste image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <button className="submit-btn" onClick={AddProduct}>
                    Add Product
                </button>
            </div>
        </div>
    );
}