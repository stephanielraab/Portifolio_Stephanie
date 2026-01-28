"use client";

import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // efeito de scroll no header
  useEffect(() => {
    return scrollY.on("change", y => {
      setScrolled(y > 20);
      if (open) setOpen(false); // fecha ao rolar
    });
  }, [scrollY, open]);

  // fechar ao clicar fora
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 w-full transition ${
          scrolled
            ? "bg-black/80 backdrop-blur border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <span className="font-semibold text-white">SLR</span>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 text-sm text-zinc-400">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            ref={buttonRef}
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
            aria-label="Abrir menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </motion.header>

      {/* MENU LATERAL DIREITO */}
      <AnimatePresence>
        {open && (
          <motion.aside
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[60] h-full w-[260px] bg-black/95 backdrop-blur border-l border-white/5 md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-semibold text-white">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="text-white"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-3 px-6 py-4 text-zinc-300">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[13px] transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
