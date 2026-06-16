export function Contact() {
  return (
    <section
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "10px",
          color: "#222",
        }}
      >
        Contact Us
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Have questions about our products or services? We'd love to hear from you.
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          color: "#555",
        }}
      >
        <p>Email: contact@shopease.com</p>
        <p>Phone: +1 (234) 567-8900</p>
        <p>Address: 123 Auto Street, Car City</p>
      </div>
    </section>
  );
}