import React from "react";
import { supabase } from "../Supabase";
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
export function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {readProducts()}, [])
  async function readProducts() {
    const { data } = await supabase.from("Product").select("*");
    setProducts(data);
  }
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          background: "#2563eb",
          color: "white",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Welcome to ShopEase
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 30px",
            fontSize: "1.2rem",
          }}
        >
          Shop your favorite products at the best prices. Discover amazing deals,
          secure payments, and fast delivery all in one place.
        </p>

        <button
          style={{
            backgroundColor: "white",
            color: "#2563eb",
            border: "none",
            padding: "12px 25px",
            borderRadius: "5px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Why Choose ShopEase?
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              backgroundColor: "#f5f5f5",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>🚚 Fast Delivery</h3>
            <p>Get your orders delivered quickly and safely.</p>
          </div>

          <div
            style={{
              width: "300px",
              backgroundColor: "#f5f5f5",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>🔒 Secure Payments</h3>
            <p>Multiple trusted payment methods for safe shopping.</p>
          </div>

          <div
            style={{
              width: "300px",
              backgroundColor: "#f5f5f5",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <h3>💰 Best Deals</h3>
            <p>Enjoy exclusive discounts and seasonal offers.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        style={{
          backgroundColor: "#f8f9fa",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Featured Products
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {/* Product 1 */}
          <div
            style={{
              width: "250px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px", padding: "20px" }}>🎧</div>
            <div style={{ padding: "15px" }}>
              <h3>Wireless Headphones</h3>
              <p>$89</p>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div
            style={{
              width: "250px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px", padding: "20px" }}>⌚</div>
            <div style={{ padding: "15px" }}>
              <h3>Smart Watch</h3>
              <p>$129</p>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div
            style={{
              width: "250px",
              backgroundColor: "white",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "60px", padding: "20px" }}>👟</div>
            <div style={{ padding: "15px" }}>
              <h3>Running Shoes</h3>
              <p>$99</p>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          {products.map((product) => (
        <div key={product.id} style={{ textAlign: "center", margin: "20px" }}>
          <img src={product.Image} alt={product.Name} style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "10px" }} />
          <h3>{product.Name}</h3>
          <p>${product.Price}</p>
          <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Add to Cart
              </button>
        </div>
      ))}
        </div>
      </section>
      

      {/* Offer Banner */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            backgroundColor: "#2563eb",
            color: "white",
            padding: "40px",
            borderRadius: "12px",
          }}
        >
          <h2>🔥 Special Sale</h2>
          <p style={{ marginBottom: "20px" }}>
            Save up to 50% on selected products this week.
          </p>

          <button
            style={{
              backgroundColor: "white",
              color: "#2563eb",
              border: "none",
              padding: "12px 25px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Explore Deals
          </button>
        </div>
      </section>
      <nav>
<Link to ="/add">
<button
  style={{
    backgroundColor: "white",
    color: "#2563eb",
    border: "none",
    padding: "12px 25px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  }}
>
  Be a Seller
</button>
</Link>
</nav>
      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#111",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>© 2025 ShopEase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;