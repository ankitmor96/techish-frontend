import { Link } from "react-router";

/** Four-column site footer with brand, Explore, Services, and Get in Touch columns. */
export function Footer() {
  return (
    <footer className="tk-footer">
      <div className="tk-footer-inner">
        <div className="tk-footer-brand">
          <Link to="/" className="tk-logo">
            <span className="tk-logo-mark">T</span> Techish Innovations
          </Link>
          <p>
            A technology product company building AI, software, and emerging
            technology products for real-world problems.
          </p>
        </div>

        <div className="tk-footer-col">
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/careers">Careers</Link>
        </div>

        <div className="tk-footer-col">
          <h4>Products</h4>
          <Link to="/products">AI Employees</Link>
          <Link to="/products">Civic Alert</Link>
          <Link to="/products">EV Circular</Link>
          <Link to="/products">Skill-Based Networks</Link>
        </div>

        <div className="tk-footer-col">
          <h4>Get in Touch</h4>
          <p style={{ fontSize: 14, color: "var(--tk-muted)" }}>
            Have a problem worth solving? Reach out through our Contact page
            and we'll get back to you shortly.
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="tk-footer-bottom">
        <span>© 2026 Techish Innovations</span>
        <span>BUILDING PRODUCTS FOR REAL-WORLD PROBLEMS</span>
      </div>
    </footer>
  );
}
