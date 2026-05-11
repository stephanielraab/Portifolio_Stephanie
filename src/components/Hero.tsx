"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import animationData from "@/lottie/hand-drawn-computer.json";

const TYPED_TEXT = "Lisboa Raab";

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    // começa a digitar após o delay da animação do nome
    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(TYPED_TEXT.slice(0, i));
        if (i === TYPED_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div
      className="
        min-h-screen
        flex items-start md:items-center
        px-6 pt-24 md:pt-0
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
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              inline-block text-[11px]
              tracking-[0.35em] uppercase
              text-zinc-400 opacity-80
            "
          >
            Front-end Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              mt-5
              text-3xl sm:text-4xl md:text-6xl
              leading-[1.05] text-white
            "
          >
            Stephanie
            <br />
            <span className="
              relative inline-block
              bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-500
              bg-clip-text text-transparent
            ">
              {displayed}
              {/* cursor piscando — some quando termina de digitar */}
              {!done && (
                <span className="
                  inline-block w-[3px] h-[0.85em]
                  bg-fuchsia-400
                  align-middle ml-[2px]
                  animate-pulse
                " />
              )}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="
              mt-6 mx-auto md:mx-0
              max-w-[42ch]
              text-xs sm:text-sm
              leading-relaxed text-zinc-400
            "
          >
            Desenvolvedora Front-end especializada em{" "}
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
              React.Js
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-500/10 border border-zinc-400/30 text-zinc-300 text-xs font-medium">
              Next.Js
            </span>{" "}
            e interfaces modernas, com foco em animações, performance e experiência do usuário.
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
            <Lottie animationData={animationData} loop className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}