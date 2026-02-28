import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on software development, AI automation, and building digital products. From the engineering team at Dhavin Technologies.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-bg-dark">
        <Container>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <GradientText>Insights</GradientText> & Ideas
              </h1>
              <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-2xl">
                Thoughts on technology, engineering practices, and building
                digital products that matter.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Blog grid */}
      <section className="py-24 bg-bg-light">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article className="h-full rounded-2xl border border-border-light overflow-hidden hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 bg-white">
                    {/* Image placeholder */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-bg-card-dark to-border-dark flex items-center justify-center">
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
                      <h2 className="text-lg font-semibold text-text-on-light mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
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
        </Container>
      </section>
    </>
  );
}
