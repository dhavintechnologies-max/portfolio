import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.title,
      description: post.excerpt,
    };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft size={14} />
                Back to all posts
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="filled">{post.category}</Badge>
                <span className="text-sm text-text-muted">
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-text-on-dark">
                {post.title}
              </h1>
              <p className="mt-4 text-text-muted">
                {formatDate(post.date)}
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24 bg-bg-light">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none text-text-muted">
                <p className="text-xl leading-relaxed text-text-on-light/80">
                  {post.excerpt}
                </p>
                <div className="mt-12 p-8 rounded-2xl bg-bg-alt border border-border-light text-center">
                  <p className="text-lg font-medium text-text-on-light mb-2">
                    Full article coming soon
                  </p>
                  <p className="text-text-muted">
                    This is a placeholder for the full blog post content.
                    Check back soon for the complete article.
                  </p>
                </div>
              </div>

              {/* Next post */}
              <div className="mt-16 pt-8 border-t border-border-light">
                <p className="text-sm text-text-muted mb-3">Next article</p>
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-text-on-light group-hover:text-accent transition-colors">
                    {nextPost.title}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-text-muted group-hover:text-accent transition-colors"
                  />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-text-on-dark">
                Want to discuss a project?
              </h2>
              <p className="mt-4 text-text-muted text-lg">
                Let&apos;s talk about how we can help bring your ideas to life.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Get in Touch
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
