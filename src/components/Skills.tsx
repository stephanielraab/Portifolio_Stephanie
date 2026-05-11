"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <div className="py-16 md:py-20">
      <h2 className="mb-8 text-3xl md:text-4xl font-bold text-white">
        Skills &amp; Tecnologias
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6">
        {skills.map((skill) => {
          const Icon = skill.icon;
          const isStudying = skill.status === "studying";

          return (
            <motion.div
              key={skill.name}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`
                group relative overflow-hidden
                rounded-2xl
                border ${isStudying ? "border-white/5 border-dashed" : "border-white/10"}
                bg-gradient-to-b from-zinc-900 to-zinc-950
                p-5
                flex flex-col items-center justify-center gap-3
              `}
            >
              {/* luz interna no hover */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-br from-white/10 via-transparent to-transparent
                  opacity-0 transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              {/* ícone com a cor da skill */}
              <div
                className={`
                  relative z-10
                  bg-gradient-to-br ${skill.color}
                  bg-clip-text
                  transition-all duration-300
                  group-hover:scale-110
                  ${isStudying ? "opacity-50 group-hover:opacity-80" : ""}
                `}
              >
                <Icon
                  size={30}
                  className="text-zinc-300 group-hover:text-white transition-colors duration-300"
                  style={{
                    // aplica a cor do gradient como cor do ícone via filter
                    filter: isStudying ? "none" : undefined,
                  }}
                />
              </div>

              {/* nome */}
              <span
                className={`
                  relative z-10
                  text-sm font-medium text-center
                  text-zinc-400
                  transition-colors
                  group-hover:text-white
                  ${isStudying ? "text-[12px] leading-snug" : ""}
                `}
              >
                {skill.name}
              </span>

              {/* linha decorativa */}
              <span
                className={`
                  mt-1 h-[1px] w-8
                  bg-gradient-to-r ${skill.color}
                  opacity-30
                  transition-all duration-300
                  group-hover:w-12 group-hover:opacity-60
                `}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}