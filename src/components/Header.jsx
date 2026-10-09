import { whatsappNumber } from "../data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="JStyles Barber"
            className="h-11 w-11 rounded-full border border-white/10 bg-white/5 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div>
            <h1 className="text-xl font-bold leading-none">
              J<span className="text-amber-400">Styles</span> Barber
            </h1>
            <p className="text-xs text-neutral-400">Barbería, productos y envíos</p>
          </div>
        </a>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#productos" className="transition hover:text-amber-400">Productos</a>
          <a href="#servicios" className="transition hover:text-amber-400">Servicios</a>
          <a href="#promos" className="transition hover:text-amber-400">Promos</a>
          <a href="#envios" className="transition hover:text-amber-400">Envíos</a>
          <a href="#video" className="transition hover:text-amber-400">Video</a>
          <a href="#contacto" className="transition hover:text-amber-400">Contacto</a>
        </nav>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Hola, quiero consultar por productos, precios y envíos."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:scale-105 md:inline-flex"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}