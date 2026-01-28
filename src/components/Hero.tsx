"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "@/lottie/hand-drawn-computer.json";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        min-h-screen
        flex items-start md:items-center
        px-6 pt-24 md:pt-0
        scroll-mt-16 md:scroll-mt-20
        overflow-x-hidden
      "
    >
      <div
        className="
          mx-auto w-full max-w-6xl
          grid gap-12
          md:grid-cols-2 md:gap-14
          items-center
        "
      >
        {/* TEXTO */}
        <div className="text-center md:text-left">
          {/* CARGO */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              inline-block
              text-[11px]
              tracking-[0.35em]
              uppercase
              text-zinc-400
              opacity-80
            "
          >
            Front-end Developer
          </motion.span>

          {/* NOME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-6xl
              leading-[1.05]
              text-white
            "
          >
            Stephanie
            <br />
            <span className="
              relative
              inline-block
              bg-gradient-to-r
              from-pink-400
              via-fuchsia-400
              to-purple-500
              bg-clip-text
              text-transparent
            ">
              Lisboa Raab

              {/* glow */}
              <span
                className="
                  absolute inset-0
                  bg-gradient-to-r
                 from-pink-400
                 via-fuchsia-400
                 to-purple-500
                  bg-clip-text
                  text-transparent
                "
              />
            </span>
          </motion.h1>

          {/* DESCRIÇÃO */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="
              mt-6
              mx-auto
              md:mx-0
              max-w-[42ch]
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              text-zinc-300
            "
          >
            Desenvolvedora Front-end especializada em{" "}
            <strong className="text-white font-medium">React</strong>,{" "}
            <strong className="text-white font-medium">Next.js</strong> e interfaces modernas,
            com foco em animações, performance e experiência do usuário.
          </motion.p>
        </div>

        {/* ANIMAÇÃO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[460px]">
            <Lottie
              animationData={animationData}
              loop
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
