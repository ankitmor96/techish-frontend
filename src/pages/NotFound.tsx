import { Link } from "react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout title="Page Not Found — Techish Innovation">
      <section className="tk-cta" style={{ paddingTop: 160, paddingBottom: 160 }}>
        <p className="tk-eyebrow">404</p>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="tk-pill solid">
          Back to Home
        </Link>
      </section>
    </SiteLayout>
  );
}
