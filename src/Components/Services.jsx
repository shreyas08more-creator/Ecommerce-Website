import React from "react";
import "./Services.css";

export function Services() {
  const offerings = [
    { title: "Online Shopping", text: "Browse and purchase products cleanly across dynamic fast catalogs.", icon: "🛒" },
    { title: "Fast Delivery", text: "We ensure precise automated shipping metrics so your goods arrive directly.", icon: "⚡" },
    { title: "Secure Payments", text: "Shop easily using completely integrated layer encryptions.", icon: "🔒" }
  ];

  return (
    <section className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {offerings.map((s, i) => (
          <div className="service-node" key={i}>
            <div className="service-icon">{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;