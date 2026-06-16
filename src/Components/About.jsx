export function About() {
  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.8",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          marginBottom: "20px",
          color: "#111",
          textAlign: "center",
        }}
      >
        About ShopEase
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 40px",
          fontSize: "1.1rem",
        }}
      >
        Welcome to ShopEase, your trusted online shopping destination. We are
        dedicated to providing a seamless, secure, and enjoyable shopping
        experience for customers looking for quality products at competitive
        prices.
      </p>

      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#222" }}>Who We Are</h2>
        <p>
          ShopEase was created with a simple mission: to make online shopping
          easy, convenient, and accessible for everyone. From everyday
          essentials to the latest trends, we carefully curate a wide range of
          products to meet the needs of modern shoppers.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Our Mission</h3>
          <p>
            To provide customers with a reliable platform where they can
            discover high-quality products, enjoy competitive pricing, and shop
            with confidence.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Our Vision</h3>
          <p>
            To become a preferred e-commerce destination by delivering
            exceptional customer experiences and innovative shopping solutions.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Our Values</h3>
          <p>
            Customer satisfaction, trust, quality, transparency, and continuous
            improvement are at the heart of everything we do.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#eef6ff",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>What We Offer</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Wide selection of products across multiple categories</li>
          <li>Secure and hassle-free online shopping</li>
          <li>Fast and reliable delivery services</li>
          <li>Competitive prices and exclusive deals</li>
          <li>Responsive customer support</li>
          <li>Easy returns and customer-friendly policies</li>
        </ul>
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "30px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Why Choose ShopEase?</h2>
        <p>
          At ShopEase, we believe shopping should be simple, enjoyable, and
          trustworthy. We continuously work to improve our platform, expand our
          product offerings, and provide an experience that keeps our customers
          coming back.
        </p>

        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Thank you for choosing ShopEase. We're excited to be part of your
          shopping journey.
        </p>
      </div>
    </section>
  );
}

export default About;