export function Services() {
  return (
    <section
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        lineHeight: "1.8",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          textAlign: "center",
          marginBottom: "20px",
          color: "#111",
        }}
      >
        Our Services
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto 40px",
          fontSize: "1.1rem",
        }}
      >
        At ShopEase, we provide a complete online shopping experience designed
        to make purchasing products simple, secure, and convenient. Our
        services are focused on delivering value, quality, and customer
        satisfaction.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Online Shopping</h2>
          <p>
            Browse and purchase products from a wide range of categories,
            including fashion, electronics, home essentials, and more.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Fast Delivery</h2>
          <p>
            We ensure timely and reliable delivery services so your orders reach
            you quickly and safely.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Secure Payments</h2>
          <p>
            Shop with confidence using our secure payment options, including
            cards, digital wallets, and online banking.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Easy Returns</h2>
          <p>
            Hassle-free return and refund policies help ensure a smooth shopping
            experience for every customer.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Customer Support</h2>
          <p>
            Our dedicated support team is available to assist with orders,
            inquiries, and any issues you may encounter.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h2>Special Offers</h2>
          <p>
            Enjoy exclusive discounts, seasonal sales, and promotional deals on
            a variety of products throughout the year.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#eef6ff",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Why Shop With ShopEase?</h2>
        <p>
          We combine quality products, competitive pricing, secure transactions,
          and excellent customer service to create a shopping experience you can
          trust.
        </p>
      </div>
    </section>
  );
}

export default Services;