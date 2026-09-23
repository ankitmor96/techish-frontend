import { SiteLayout } from "@/components/site/SiteLayout";
import { Marquee } from "@/components/site/Marquee";
import { SectionHead } from "@/components/site/SectionHead";
import { CTABand } from "@/components/site/CTABand";
import { Reveal } from "@/components/site/Reveal";
import { BLOG_POSTS, BLOG_TOPICS } from "@/data/site";

const BLOG_MARQUEE = [
  "Written by Engineers",
  "No Recycled Content",
  "Practical Perspectives",
  "Updated Regularly",
  "Real Project Experience",
] as const;

const FEATURED = BLOG_POSTS[0];
const FEATURED_IMAGE = "/images/4.jpg";

export default function Blog() {
  return (
    <SiteLayout title="Blog — Techish Innovation">
      {/* ============ PAGE HERO ============ */}
      <header className="tk-page-hero">
        <p className="tk-eyebrow">Insights &amp; Ideas</p>
        <h1>
          Ideas on Engineering &amp; Product, <span>From Our Team</span>
        </h1>
        <p>
          Practical, no-fluff perspectives on software engineering, product
          strategy, and design — written by the people building it, not a
          content mill chasing keywords.
        </p>
      </header>

      <Marquee items={BLOG_MARQUEE} />

      {/* ============ FEATURED POST ============ */}
      <section>
        <div className="tk-section-inner">
          <Reveal>
            <article className="tk-card featured-post">
              <div className="tk-card-img">
                <img
                  src={FEATURED_IMAGE}
                  alt={FEATURED.title}
                  loading="lazy"
                />
              </div>
              <div className="featured-body">
                <span className="tk-step">Featured — {FEATURED.category}</span>
                <h2 className="featured-title">{FEATURED.title}</h2>
                <p>
                  A practical guide to designing web applications that scale
                  gracefully — from modular monoliths to microservices, covering
                  caching strategies, database sharding, and horizontal scaling
                  patterns.
                </p>
                <span className="tk-arrowlink">Read Article</span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ============ LATEST POSTS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead eyebrow="Latest Posts" title="All Articles" />
          <div className="tk-grid tk-grid-3">
            {BLOG_POSTS.map((post) => (
              <Reveal key={post.title} className="tk-card">
                <div className="post-meta">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <span className="tk-arrowlink">Read Article</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TOPICS ============ */}
      <section>
        <div className="tk-section-inner">
          <SectionHead
            eyebrow="Browse by Topic"
            title="Find What You're Looking For"
            center
          />
          <Reveal className="topic-chips">
            {BLOG_TOPICS.map((topic) => (
              <span key={topic} className="tk-chip">
                {topic}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand
        eyebrow="Never Miss a New Article"
        title="Ready to Put These Ideas Into Practice?"
        description="Get in touch and we'll personally notify you whenever we publish something new — or just tell us what you're building."
        ctaLabel="Start a Project"
      />
    </SiteLayout>
  );
}
