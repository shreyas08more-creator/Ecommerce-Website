import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase"; // Adjust this relative path based on your folder structure

export function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear the real Supabase session
      await supabase.auth.signOut();
      alert("👋 You have been successfully logged out.");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

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
          font-family: Arial, sans-serif;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 1.5rem;
          align-items: center; /* Aligns the links and button perfectly */
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #60a5fa;
        }

        /* Sleek Logout Button styles */
        .logout-btn {
          background-color: #ef4444; /* Red color to indicate exit */
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .logout-btn:hover {
          background-color: #dc2626;
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(239, 68, 68, 0.3);
        }

        .logout-btn:active {
          transform: translateY(0);
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/services">Services</Link></li> 
          <li><Link to="/contact">Contact</Link></li>
          
          {/* Functional Logout Button */}
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;