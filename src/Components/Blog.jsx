export function Blog() {
  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          marginBottom: "20px",
          color: "#111",
        }}
      >
        ShopEase Blog
      </h1>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 40px",
          fontSize: "1.1rem",
          textAlign: "center",
          lineHeight: "1.8",
        }}
      >
        Welcome to the ShopEase Blog, your source for shopping tips, product
        guides, lifestyle trends, and the latest updates from the world of
        e-commerce. Discover helpful articles that make your shopping
        experience smarter and more enjoyable.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Top Shopping Trends in 2025</h2>
          <p>
            Explore the latest e-commerce trends, from personalized shopping
            experiences to emerging technologies shaping the future of online
            retail.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Published: January 15, 2025
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>How to Find the Best Deals Online</h2>
          <p>
            Learn practical tips for saving money while shopping online,
            including using discounts, seasonal sales, and smart comparison
            strategies.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Published: February 10, 2025
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Essential Product Buying Guides</h2>
          <p>
            Discover detailed buying guides that help you choose the right
            products based on quality, features, and value for money.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Published: March 5, 2025
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Safe and Secure Online Shopping</h2>
          <p>
            Understand the best practices for protecting your personal and
            payment information while shopping online.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Published: April 12, 2025
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Benefits of Shopping with ShopEase</h2>
          <p>
            Learn about our commitment to quality products, fast delivery,
            secure payments, and exceptional customer service.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Published: May 8, 2025
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Upcoming Seasonal Sales & Offers</h2>
          <p>
            Stay updated on exciting promotions, exclusive discounts, and
            special events available on ShopEase throughout the year.
          </p>
          <p style={{ color: "#666", fontSize: "0.9rem" }}>
            Published: June 1, 2025
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          backgroundColor: "#eef6ff",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2>Stay Connected</h2>
        <p>
          Follow the ShopEase Blog for the latest shopping insights, product
          recommendations, and exclusive updates designed to help you shop
          smarter every day.
        </p>
      </div>
    </section>
  );
}

export default Blog;