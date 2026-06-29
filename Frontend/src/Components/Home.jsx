import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Added a loading state to prevent flash of content
  const navigate = useNavigate();

  useEffect(() => {
    checkUserAndFetchData();
  }, []);

  async function checkUserAndFetchData() {
    // 1. Check if a valid session exists
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      // If no user is logged in, redirect them to the login page
      navigate("/login");
      return;
    }

    // 2. If authenticated, proceed to fetch the data
    await readProducts();
    setLoading(false);
  }

  async function readProducts() {
    const { data } = await supabase.from("Product").select("*");
    if (data) {
      setProducts(data);
    }
  }

  // Prevent rendering the page while the auth check finishes
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Hero Section */}
      <section style={{ background: "#2563eb", color: "white", textAlign: "center", padding: "100px 20px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Welcome to ShopEase</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto 30px", fontSize: "1.2rem" }}>
          Shop your favorite products at the best prices. Discover amazing deals, secure payments, and fast delivery all in one place.
        </p>
        <button style={{ backgroundColor: "white", color: "#2563eb", border: "none", padding: "12px 25px", borderRadius: "5px", fontSize: "1rem", cursor: "pointer" }}>
          Shop Now
        </button>
      </section>

      {/* Features Section */}
      <section style={{ padding: "60px 20px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Why Choose ShopEase?</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          <div style={{ width: "300px", backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
            <h3>🚚 Fast Delivery</h3>
            <p>Get your orders delivered quickly and safely.</p>
          </div>
          <div style={{ width: "300px", backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
            <h3>🔒 Secure Payments</h3>
            <p>Multiple trusted payment methods for safe shopping.</p>
          </div>
          <div style={{ width: "300px", backgroundColor: "#f5f5f5", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
            <h3>💰 Best Deals</h3>
            <p>Enjoy exclusive discounts and seasonal offers.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section style={{ backgroundColor: "#f8f9fa", padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Featured Products</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
          {/* Static Item placeholders */}
          <div style={{ width: "250px", backgroundColor: "white", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ fontSize: "60px", padding: "20px" }}>🎧</div>
            <div style={{ padding: "15px" }}>
              <h3>Wireless Headphones</h3>
              <p>$89</p>
              <button style={{ width: "100%", padding: "10px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
            </div>
          </div>

          <div style={{ width: "250px", backgroundColor: "white", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
            <div style={{ fontSize: "60px", padding: "20px" }}>⌚</div>
            <div style={{ padding: "15px" }}>
              <h3>Smart Watch</h3>
              <p>$129</p>
              <button style={{ width: "100%", padding: "10px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
            </div>
          </div>

          {/* Database Items Mapping */}
          {products.map((product) => (
            <div key={product.id} style={{ width: "250px", backgroundColor: "white", borderRadius: "10px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", textAlign: "center" }}>
              <img src={product.Image} alt={product.Name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
              <div style={{ padding: "15px" }}>
                <h3>{product.Name}</h3>
                <p>${product.Price}</p>
                <button style={{ width: "100%", padding: "10px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Banner */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#2563eb", color: "white", padding: "40px", borderRadius: "12px" }}>
          <h2>🔥 Special Sale</h2>
          <p style={{ marginBottom: "20px" }}>Save up to 50% on selected products this week.</p>
          <button style={{ backgroundColor: "white", color: "#2563eb", border: "none", padding: "12px 25px", borderRadius: "5px", cursor: "pointer" }}>Explore Deals</button>
        </div>
      </section>

      <div style={{ textAlign: "center", paddingBottom: "60px" }}>
        {/* Swapped standard anchor tag with an internal action or react-router Link to prevent complete page refreshes */}
        <button onClick={() => navigate("/add")} style={{ backgroundColor: "#2563eb", color: "white", border: "none", padding: "12px 35px", borderRadius: "30px", fontSize: "1rem", cursor: "pointer", fontWeight: "bold" }}>
          Be a Seller
        </button>
      </div>

      <footer style={{ backgroundColor: "#111", color: "white", textAlign: "center", padding: "20px" }}>
        <p>© 2026 ShopEase. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;