import { useState } from "react";
import { supabase } from "../Supabase";
import "./AddP.css";

export function AddP() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    async function AddProduct() {
        const { error } = await supabase
            .from("Product")
            .insert({
                Name: name,
                Price: price,
                Image: image
            });

        if (!error) {
            alert("✅ Product Added Successfully!");
            setName("");
            setPrice("");
            setImage("");
        }
    }

    return (
        <div className="add-product-page">
            <div className="add-product-card">

                <div className="card-header">
                    <h1>Add Product</h1>
                    <p>Add new products to your ShopEase store</p>
                </div>

                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        placeholder="Nike Air Max"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Price (₹)</label>
                    <input
                        type="number"
                        placeholder="4999"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        placeholder="https://..."
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                {image && (
                    <div className="preview-container">
                        <img src={image} alt="Preview" />
                    </div>
                )}

                <button
                    className="submit-btn"
                    onClick={AddProduct}
                >
                    Add Product
                </button>

            </div>
        </div>
    );
}