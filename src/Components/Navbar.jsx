export function Navbar() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #1f2937;
          color: white;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 1.5rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: ;#60a5fa
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
          }

          .nav-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">ShopEase</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}