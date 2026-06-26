import React from "react";
import "./About.css";

export function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About ShopEase</h1>
      <p className="about-subtitle">
        Welcome to ShopEase, your trusted online shopping destination. We are
        dedicated to providing a seamless, secure, and enjoyable shopping
        experience.
      </p>

      <div className="about-card hero-card">
        <h2>Who We Are</h2>
        <p>
          ShopEase was created with a simple mission: to make online shopping
          easy, convenient, and accessible for everyone. From everyday
          essentials to the latest trends, we carefully curate a wide range of
          products to meet the needs of modern shoppers.
        </p>
      </div>

      <div className="about-grid">
        <div className="grid-card">
          <h3>Our Mission</h3>
          <p>To provide customers with a reliable platform where they can discover high-quality products.</p>
        </div>
        <div className="grid-card">
          <h3>Our Vision</h3>
          <p>To become a preferred e-commerce destination by delivering exceptional customer experiences.</p>
        </div>
        <div className="grid-card">
          <h3>Our Values</h3>
          <p>Customer satisfaction, trust, quality, transparency, and continuous improvement.</p>
        </div>
      </div>

      <div className="about-card highlight-card">
        <h2>What We Offer</h2>
        <ul className="offer-list">
          <li>Wide selection of products across multiple categories</li>
          <li>Secure and hassle-free online shopping</li>
          <li>Fast and reliable delivery services</li>
          <li>Competitive prices and exclusive deals</li>
          <li>Responsive customer support</li>
          <li>Easy returns and customer-friendly policies</li>
        </ul>
      </div>
    </section>
  );
}

export default About;