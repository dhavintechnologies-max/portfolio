import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32 bg-bg-light">
      <Container>
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12 lg:mb-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-text-on-light">
                Insights & Ideas
              </h2>
              <p className="mt-4 text-lg text-text-muted max-w-xl">
                Thoughts on technology, engineering, and building digital products.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
            >
              View all posts <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="h-full rounded-2xl border border-border-light overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 bg-white">
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-bg-card-dark to-border-dark flex items-center justify-center overflow-hidden">
                    <span className="text-2xl font-bold text-text-muted/20 group-hover:scale-105 transition-transform duration-300">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="filled">{post.category}</Badge>
                      <span className="text-xs text-text-muted">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-on-light mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-text-muted">
                      {formatDate(post.date)}
                    </p>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent"
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
