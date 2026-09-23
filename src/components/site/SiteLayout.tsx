import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ChatbotWidget } from "./ChatbotWidget";

/** Shared page shell: navbar + content + footer + floating AI assistant. */
export function SiteLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="tk-site">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
