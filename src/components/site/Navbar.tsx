import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

interface DropdownItem {
  label: string;
  href: string;
  tag?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  active: boolean;
}

function NavDropdown({ label, items, active }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className={`tk-dropdown${open ? " tk-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`tk-nav-btn${active ? " tk-active" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label} <span className="caret">▼</span>
      </button>
      <div className="tk-dropdown-menu">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label} <small>{item.tag}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Sticky top navigation with a Company hover dropdown, a direct Products link,
 * a mobile hamburger slide-down menu, and the "Start a Conversation" CTA.
 */
export function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu whenever the route changes (state-during-render
  // pattern from React docs — same behavior, no cascading render from an effect)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <nav className="tk-nav">
        <div className="tk-nav-inner">
          <Link to="/" className="tk-logo">
            <span className="tk-logo-mark">T</span> Techish Innovations
          </Link>

          <div className="tk-nav-links">
            <Link
              to="/"
              className={pathname === "/" ? "tk-active" : ""}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={pathname === "/products" ? "tk-active" : ""}
            >
              Products
            </Link>
            <NavDropdown
              label="Company"
              active={COMPANY_PATHS.includes(pathname)}
              items={COMPANY_ITEMS}
            />
            <Link
              to="/contact"
              className={pathname === "/contact" ? "tk-active" : ""}
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className={`tk-nav-toggle${mobileOpen ? " tk-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <Link to="/contact" className="tk-pill nav-cta">
            Start a Conversation
          </Link>
        </div>
      </nav>

      <nav
        className={`tk-mobile-nav${mobileOpen ? " tk-open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <div className="tk-m-group">
          <b>Company</b>
          {COMPANY_ITEMS.map((item) => (
            <Link key={item.label} to={item.href}>
              {item.label} <small>{item.tag}</small>
            </Link>
          ))}
        </div>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
}

const COMPANY_ITEMS: DropdownItem[] = [
  { label: "About Us", href: "/about", tag: "ABOUT" },
  { label: "Careers", href: "/careers", tag: "JOBS" },
];

const COMPANY_PATHS = ["/about", "/careers"];
