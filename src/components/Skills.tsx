"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-6 flex justify-center scroll-mt-20 md:scroll-mt-24"
    >
      <div className="w-full max-w-5xl">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold text-white">
          Skills & Tecnologias
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-gradient-to-b from-zinc-900 to-zinc-950
                  p-5
                  flex flex-col items-center justify-center gap-3
                "
              >
                {/* luz interna premium */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-gradient-to-br from-white/10 via-transparent to-transparent
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />

                {/* ícone */}
                <Icon
                  size={30}
                  className="
                    relative z-10
                    text-zinc-300
                    transition-all duration-300
                    group-hover:text-white group-hover:scale-110
                  "
                />

                {/* nome */}
                <span
                  className="
                    relative z-10
                    text-sm font-medium
                    text-zinc-400
                    transition-colors
                    group-hover:text-white
                  "
                >
                  {skill.name}
                </span>

                {/* linha decorativa */}
                <span
                  className="
                    mt-1 h-[1px] w-8
                    bg-white/10
                    transition-all duration-300
                    group-hover:w-12 group-hover:bg-white/30
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
