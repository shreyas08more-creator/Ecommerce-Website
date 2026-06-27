import React from "react";
import "./Blog.css";

export function Blog() {
  const blogs = [
    { title: "Top Shopping Trends in 2026", desc: "Explore the latest e-commerce trends, from personalized AI shopping to sustainable packaging updates.", date: "January 15, 2026" },
    { title: "How to Find the Best Deals Online", desc: "Learn practical tips for saving money while shopping online using clever modern web extension tracking systems.", date: "February 10, 2026" },
    { title: "Essential Product Buying Guides", desc: "Discover detailed verified breakdowns that help you choose the right specs without getting platform buyer remorse.", date: "March 5, 2026" }
  ];

  return (
    <section className="blog-container">
      <h1 className="blog-title">ShopEase Blog</h1>
      <p className="blog-subtitle">Your source for shopping tips, lifestyle trends, and structural updates.</p>
      
      <div className="blog-grid">
        {blogs.map((blog, idx) => (
          <article className="blog-post" key={idx}>
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
            <span className="blog-date">📅 {blog.date}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;