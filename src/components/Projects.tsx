"use client";

import { Github, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <div className="pt-32 pb-24">
      <h2 className="mb-10 text-3xl md:text-4xl font-bold text-white">
        Projetos
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              group
              relative
              rounded-2xl
              border
              ${project.highlight
                ? "border-fuchsia-500/30 bg-gradient-to-br from-zinc-900 via-zinc-900 to-fuchsia-950/30"
                : "border-white/5 bg-zinc-900"
              }
              p-5
              shadow-md
            `}
          >
            {/* glow hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 opacity-0 blur-xl transition group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col gap-3 h-full">
              {/* header: título + badge highlight */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {project.title}
                </h3>
                {project.highlight && (
                  <span className="flex items-center gap-1 shrink-0 text-[10px] font-medium tracking-wide uppercase text-fuchsia-400 border border-fuchsia-500/30 rounded-full px-2 py-0.5">
                    <Star size={10} fill="currentColor" />
                    Destaque
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-zinc-400 flex-1">
                {project.description}
              </p>

              {/* Tech badges */}
              {project.techs && project.techs.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={project.netlify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
                >
                  <ExternalLink size={15} />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver código no GitHub"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:border-white/30 hover:text-white hover:bg-white/5"
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}