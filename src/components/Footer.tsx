export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500">
        <span className="block sm:inline">
          © {new Date().getFullYear()} Stephanie Lisboa Raab.
        </span>
        <span className="block sm:inline sm:ml-1">
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

