import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/home";
import { Container, SectionHeading } from "./shared";

export function BlogPosts() {
  return (
    <section className="bg-brand-soft py-14 lg:py-18" aria-label="Fique por dentro">
      <Container>
        <SectionHeading
          title="Fique por dentro"
          subtitle="Conheça conteúdos para te auxiliar na gestão do seu negócio."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-40 bg-gradient-to-br from-brand-blue/20 via-brand-yellow/20 to-brand-green/20 p-5">
                <div className="flex h-full items-end rounded-2xl border border-white/60 bg-white/35 p-4 backdrop-blur-sm">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand-dark/70">
                    Blog
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-brand-dark">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-text">
                  {post.excerpt}
                </p>

                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-red"
                >
                  Continuar lendo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
