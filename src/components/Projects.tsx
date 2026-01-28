"use client";

import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function Projects() {
  return (
      <section 
  id="projects"
  className="
    max-w-6xl mx-auto
    pt-32
    pb-24
  "
>
  <div className="max-w-8xl mx-auto px-6">
    <h2 className="mb-10 text-3xl md:text-4xl font-bold text-white">
      Projetos
    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <motion.article
          key={project.title}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="
            group
            relative
            rounded-2xl
            border border-white/5
            bg-zinc-900
            p-5
            shadow-md
          "
        >
          {/* glow hover */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 opacity-0 blur-xl transition group-hover:opacity-100" />

          <div className="relative z-10 flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-white">
              {project.title}
            </h3>

            <p className="text-sm leading-relaxed text-zinc-400">
              {project.description}
            </p>


            <div className="mt-2 flex items-center gap-4">
              <a
                href={project.netlify}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
              >
                <ExternalLink size={16} />
                Netlify
              </a>

              <a
                href={project.github}
                target="_blank"
                aria-label="Ver código no GitHub"
                className="
                px-4 py-2
                gap-2
                inline-flex items-center justify-center
                rounded-full
                border border-white/10
                p-2
                text-zinc-400
                transition
                hover:border-white/30 hover:text-white hover:bg-white/5
                "
              >Github
              <Github size={16} />
            </a>

            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>

</section>

  );
}
