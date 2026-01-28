"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-brand-dark pt-32 pb-40 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          relative
          max-w-3xl
          mx-auto
          rounded-3xl
          border border-white/10
          bg-zinc-900/80
          backdrop-blur
          p-10 md:p-14
          text-center
          shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]
        "
      >
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
          Entre em contato
        </h2>

        <p className="mt-6 text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Estou aberta a oportunidades como{" "}
          <span className="text-white">Front-end Developer Jr</span>.
          Fique à vontade para entrar em contato ou conhecer meu trabalho.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {/* CTA PRINCIPAL */}
          <a
            href="mailto:stephanie.lisboa@outlook.com"
            className="
              group inline-flex items-center gap-3
              rounded-xl
              bg-white
              px-7 py-3
              text-sm font-medium text-black
              transition-all
              hover:bg-zinc-200
            "
          >
            <Mail size={18} />
            Enviar e-mail
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* LINKS */}
          <a
            href="https://www.linkedin.com/in/stephanie-lisboa-raab-57996166/"
            target="_blank"
            className="
              inline-flex items-center gap-3
              rounded-xl
              border border-white/10
              px-6 py-3
              text-sm text-white
              transition
              hover:border-white/20
              hover:bg-white/5
            "
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/stephanielraab"
            target="_blank"
            className="
              inline-flex items-center gap-3
              rounded-xl
              border border-white/10
              px-6 py-3
              text-sm text-white
              transition
              hover:border-white/20
              hover:bg-white/5
            "
          >
            <Github size={18} />
            GitHub
          </a>

          {/* CV DISCRETO */}
          <a
            href="/cv/stephanie-lisboa-raab.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center
              px-6 py-3
              text-sm text-zinc-400
              underline underline-offset-8
              decoration-white/20
              transition
              hover:text-white
              hover:decoration-white
            "
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
