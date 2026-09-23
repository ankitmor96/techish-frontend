import { Link } from "react-router";

/** Four-column site footer with brand, Explore, Services, and Get in Touch columns. */
export function Footer() {
  return (
    <footer className="tk-footer">
      <div className="tk-footer-inner">
        <div className="tk-footer-brand">
          <Link to="/" className="tk-logo">
            <span className="tk-logo-mark">T</span> Techish Innovation
          </Link>
          <p>
            We design, build, and scale digital products — engineering
            excellence for startups and enterprises alike.
          </p>
        </div>

        <div className="tk-footer-col">
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/our-craft">Our Craft</Link>
          <Link to="/our-work">Our Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/careers">Careers</Link>
        </div>

        <div className="tk-footer-col">
          <h4>Services</h4>
          <Link to="/our-craft">Web Application Development</Link>
          <Link to="/our-craft">Mobile App Development</Link>
          <Link to="/our-craft">Cloud &amp; DevOps Engineering</Link>
          <Link to="/our-craft">AI &amp; Data Solutions</Link>
        </div>

        <div className="tk-footer-col">
          <h4>Get in Touch</h4>
          <p style={{ fontSize: 14, color: "var(--tk-muted)" }}>
            Contact details are being updated — reach out through our Contact
            page and we'll get back to you shortly.
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="tk-footer-bottom">
        <span>© 2026 Techish Innovation</span>
        <span>ENGINEERING DIGITAL EXCELLENCE</span>
      </div>
    </footer>
  );
}
