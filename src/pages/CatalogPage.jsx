import { Link } from "react-router";
import { useMemo, useState } from "react";
import { motion as Motion, useReducedMotion } from "motion/react";

import { FaWhatsapp } from "react-icons/fa";
import {
  FiArrowLeft,
  FiArrowRight,
  FiSearch,
  FiX,
} from "react-icons/fi";

import { categorias, subcategorias } from "../data/categorias";
import { productos } from "../data/productos";
import { fallbackImage, whatsappNumber } from "../data/site";

// =====================================================
// GENERAR URL AMIGABLE DE PRODUCTO
// =====================================================

function crearSlug(texto = "") {
  return texto
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// =====================================================
// CATÁLOGO
// =====================================================

export default function CatalogPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [subcategoriaActiva, setSubcategoriaActiva] =
    useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  const reducirMovimiento = useReducedMotion();

  const cambiarCategoria = (categoria) => {
    setCategoriaActiva(categoria);
    setSubcategoriaActiva("Todos");
  };

  // =====================================================
  // FILTRADO
  // =====================================================

  const productosFiltrados = useMemo(() => {
    const termino = busqueda.toLowerCase().trim();

    return productos.filter((producto) => {
      const coincideCategoria =
        categoriaActiva === "Todos" ||
        producto.categoria === categoriaActiva;

      const coincideSubcategoria =
        subcategoriaActiva === "Todos" ||
        producto.subcategoria === subcategoriaActiva;

      const coincideBusqueda =
        !termino ||
        producto.nombre?.toLowerCase().includes(termino) ||
        producto.marca?.toLowerCase().includes(termino) ||
        producto.categoria?.toLowerCase().includes(termino) ||
        producto.subcategoria?.toLowerCase().includes(termino);

      return (
        coincideCategoria &&
        coincideSubcategoria &&
        coincideBusqueda
      );
    });
  }, [categoriaActiva, subcategoriaActiva, busqueda]);

  const subcategoriasDisponibles =
    categoriaActiva !== "Todos"
      ? subcategorias[categoriaActiva] || []
      : [];

  // =====================================================
  // ANIMACIONES
  // =====================================================

  const reveal = {
    hidden: {
      opacity: 0,
      y: reducirMovimiento ? 0 : 26,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reducirMovimiento ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reducirMovimiento ? 0 : 0.07,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: reducirMovimiento ? 0 : 20,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reducirMovimiento ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <Motion.header
        initial={
          reducirMovimiento
            ? false
            : {
                opacity: 0,
                y: -12,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="sticky top-0 z-50 border-b border-white/6 bg-[#070707]/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-4">
            <div className="flex h-14 w-24 items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="JStyles Barbershop"
                className="h-full w-full scale-125 object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-black leading-none tracking-tight">
                J
                <span className="text-amber-400">
                  Styles
                </span>{" "}
                Barber
              </h1>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                Barber · Shop · Catálogo
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-neutral-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5 hover:text-white"
            >
              <FiArrowLeft className="transition group-hover:-translate-x-0.5" />

              <span className="hidden sm:inline">
                Volver al inicio
              </span>

              <span className="sm:hidden">
                Inicio
              </span>
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hola, estoy viendo el catálogo de JStyles y quiero consultar por un producto."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 sm:flex"
            >
              <FaWhatsapp />
              Consultar
            </a>
          </div>
        </div>
      </Motion.header>

      <main>
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden border-b border-white/6">
          <div className="absolute -left-40 -top-32 h-125 w-125 rounded-full bg-amber-400/5 blur-3xl" />

          <div className="absolute -right-48 top-0 h-130 w-130 rounded-full bg-white/2.5 blur-3xl" />

          <Motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative mx-auto max-w-360 px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24 lg:px-12"
          >
            <Motion.div
              variants={staggerItem}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-amber-400" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-400">
                JStyles / Shop
              </p>
            </Motion.div>

            <Motion.h2
              variants={staggerItem}
              className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              Productos para

              <span className="block text-neutral-500">
                elevar tu estilo.
              </span>
            </Motion.h2>

            <Motion.p
              variants={staggerItem}
              className="mt-8 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg"
            >
              Explorá nuestra selección de productos para barbería,
              cabello y cuidado personal. Encontrá lo que buscás y
              consultanos directamente.
            </Motion.p>

            <Motion.div
              variants={staggerItem}
              className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/[0.07] pt-7"
            >
              <div>
                <p className="text-2xl font-black">
                  {productos.length}
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Productos
                </p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-black">
                  {categorias.length - 1}
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Categorías
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div className="hidden sm:block">
                <p className="text-2xl font-black">
                  JStyles
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Selección propia
                </p>
              </div>
            </Motion.div>
          </Motion.div>
        </section>

        {/* ===================================================== */}
        {/* FILTROS */}
        {/* ===================================================== */}

        <section className="sticky top-20.25 z-40 border-b border-white/6 bg-[#090909]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-360 px-5 py-5 md:px-8 lg:px-12">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              {/* BUSCADOR */}

              <div className="relative w-full xl:max-w-sm">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />

                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar producto o marca..."
                  className="h-12 w-full rounded-full border border-white/8 bg-white/4 pl-11 pr-11 text-sm text-white outline-none transition duration-300 placeholder:text-neutral-600 focus:border-amber-400/50 focus:bg-white/6"
                />

                {busqueda && (
                  <button
                    type="button"
                    onClick={() => setBusqueda("")}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 transition hover:text-white"
                  >
                    <FiX />
                  </button>
                )}
              </div>

              {/* CATEGORÍAS */}

              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:justify-end">
                {categorias.map((categoria) => {
                  const activa =
                    categoriaActiva === categoria;

                  return (
                    <button
                      key={categoria}
                      type="button"
                      onClick={() =>
                        cambiarCategoria(categoria)
                      }
                      className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                        activa
                          ? "bg-white text-black"
                          : "border border-white/8 bg-transparent text-neutral-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {categoria}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SUBCATEGORÍAS */}

            {subcategoriasDisponibles.length > 0 && (
              <Motion.div
                initial={
                  reducirMovimiento
                    ? false
                    : {
                        opacity: 0,
                        y: -5,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-5 border-t border-white/6 pt-5"
              >
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-600">
                  Filtrar por tipo
                </p>

                <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {subcategoriasDisponibles.map(
                    (subcategoria) => {
                      const activa =
                        subcategoriaActiva ===
                        subcategoria;

                      return (
                        <button
                          key={subcategoria}
                          type="button"
                          onClick={() =>
                            setSubcategoriaActiva(
                              subcategoria
                            )
                          }
                          className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition duration-300 ${
                            activa
                              ? "bg-amber-400 text-black"
                              : "bg-white/4 text-neutral-400 hover:bg-white/8 hover:text-white"
                          }`}
                        >
                          {subcategoria}
                        </button>
                      );
                    }
                  )}
                </div>
              </Motion.div>
            )}
          </div>
        </section>

        {/* ===================================================== */}
        {/* PRODUCTOS */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-360 px-5 py-12 md:px-8 md:py-16 lg:px-12">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={reveal}
            className="mb-9 flex items-end justify-between gap-6"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600">
                Colección
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                {categoriaActiva === "Todos"
                  ? "Todos los productos"
                  : categoriaActiva}
              </h2>

              {subcategoriaActiva !== "Todos" && (
                <p className="mt-2 text-sm text-amber-400">
                  {subcategoriaActiva}
                </p>
              )}
            </div>

            <p className="shrink-0 text-sm text-neutral-500">
              {productosFiltrados.length}{" "}
              {productosFiltrados.length === 1
                ? "resultado"
                : "resultados"}
            </p>
          </Motion.div>

          {productosFiltrados.length > 0 ? (
            <div
              key={`${categoriaActiva}-${subcategoriaActiva}-${busqueda}`}
              className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3"
            >
              {productosFiltrados.map((item) => {
                const urlProducto = `/producto/${crearSlug(
                  item.nombre
                )}`;

                return (
                  <Motion.article
                    key={item.id}
                    layout
                    initial={
                      reducirMovimiento
                        ? false
                        : {
                            opacity: 0,
                            y: 32,
                            scale: 0.97,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    whileHover={
                      reducirMovimiento
                        ? undefined
                        : {
                            y: -6,
                          }
                    }
                    whileTap={
                      reducirMovimiento
                        ? undefined
                        : {
                            scale: 0.98,
                          }
                    }
                    transition={{
                      duration: reducirMovimiento
                        ? 0
                        : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group"
                  >
                    {/* ========================================= */}
                    {/* FOTO */}
                    {/* ========================================= */}

                    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d0d0d] transition duration-500 group-hover:border-amber-400/20">
                      <Link
                        to={urlProducto}
                        className="block"
                        aria-label={`Ver ${item.nombre}`}
                      >
                        <div className="relative flex aspect-[4/4.4] items-center justify-center overflow-hidden">
                          <img
                            src={
                              item.imagen ||
                              fallbackImage
                            }
                            alt={item.nombre}
                            loading="lazy"
                            className="h-full w-full object-contain p-3 transition duration-700 ease-out group-hover:scale-[1.04]"
                            onError={(e) => {
                              e.currentTarget.src =
                                fallbackImage;
                            }}
                          />

                          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                          {item.destacado && (
                            <span className="absolute left-4 top-4 rounded-full border border-amber-400/30 bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300 backdrop-blur-md">
                              Destacado
                            </span>
                          )}
                        </div>
                      </Link>

                      {/* BOTONES SOBRE FOTO */}

                      <div className="absolute bottom-4 left-4 right-4 hidden translate-y-4 gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:grid md:grid-cols-2">
                        <Link
                          to={urlProducto}
                          className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 text-sm font-bold text-black shadow-xl transition hover:bg-neutral-200"
                        >
                          Ver producto
                          <FiArrowRight />
                        </Link>

                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hola, estoy viendo el catálogo de JStyles y quiero consultar por ${item.nombre}. ¿Tenés stock? ¿Hacen envíos?`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-4 py-4 text-sm font-bold text-black shadow-xl transition hover:bg-amber-300"
                        >
                          <FaWhatsapp />
                          Consultar
                        </a>
                      </div>
                    </div>

                    {/* ========================================= */}
                    {/* INFORMACIÓN */}
                    {/* ========================================= */}

                    <div className="px-1 pt-5">
                      <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                        {item.marca && (
                          <>
                            <span className="truncate">
                              {item.marca}
                            </span>

                            <span className="text-neutral-700">
                              /
                            </span>
                          </>
                        )}

                        <span className="truncate">
                          {item.subcategoria ||
                            item.categoria}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-5">
                        <Link
                          to={urlProducto}
                          className="max-w-[72%]"
                        >
                          <h3 className="text-xl font-bold leading-snug tracking-tight transition duration-300 group-hover:text-amber-300">
                            {item.nombre}
                          </h3>
                        </Link>

                        <span className="shrink-0 text-lg font-black">
                          {item.precio}
                        </span>
                      </div>

                      <p className="mt-3 h-12 overflow-hidden text-sm leading-6 text-neutral-500">
                        {item.descripcion}
                      </p>

                      {/* VARIANTES */}

                      {Array.isArray(item.variantes) &&
                        item.variantes.length > 0 &&
                        typeof item.variantes[0] ===
                          "string" && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.variantes
                              .slice(0, 4)
                              .map((variante) => (
                                <span
                                  key={variante}
                                  className="rounded-full border border-white/8 px-3 py-1 text-[11px] text-neutral-500"
                                >
                                  {variante}
                                </span>
                              ))}

                            {item.variantes.length >
                              4 && (
                              <span className="rounded-full border border-white/8 px-3 py-1 text-[11px] text-neutral-500">
                                +
                                {item.variantes
                                  .length - 4}
                              </span>
                            )}
                          </div>
                        )}

                      {/* ========================================= */}
                      {/* MOBILE */}
                      {/* ========================================= */}

                      <div className="mt-5 flex flex-wrap gap-4 md:hidden">
                        <Link
                          to={urlProducto}
                          className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-amber-300"
                        >
                          Ver producto
                          <FiArrowRight />
                        </Link>

                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hola, estoy viendo el catálogo de JStyles y quiero consultar por ${item.nombre}. ¿Tenés stock? ¿Hacen envíos?`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-amber-300"
                        >
                          <FaWhatsapp />
                          Consultar
                        </a>
                      </div>

                      {/* ========================================= */}
                      {/* DESKTOP */}
                      {/* ========================================= */}

                      <Link
                        to={urlProducto}
                        className="mt-5 hidden items-center justify-between border-t border-white/[0.07] pt-4 md:flex"
                      >
                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-600 transition group-hover:text-white">
                          Ver producto
                        </span>

                        <FiArrowRight className="text-neutral-700 transition duration-300 group-hover:translate-x-1 group-hover:text-amber-400" />
                      </Link>
                    </div>
                  </Motion.article>
                );
              })}
            </div>
          ) : (
            <Motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="flex min-h-105 flex-col items-center justify-center rounded-4xl border border-white/8 bg-white/2.5 px-6 text-center"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <FiSearch className="text-xl text-neutral-500" />
              </div>

              <h3 className="text-xl font-bold">
                No encontramos productos
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">
                Probá con otra búsqueda o seleccioná una
                categoría diferente.
              </p>

              <button
                type="button"
                onClick={() => {
                  setBusqueda("");
                  setCategoriaActiva("Todos");
                  setSubcategoriaActiva("Todos");
                }}
                className="mt-6 rounded-full bg-amber-400 px-6 py-3 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Ver todo el catálogo
              </button>
            </Motion.div>
          )}
        </section>

        {/* ===================================================== */}
        {/* CTA FINAL */}
        {/* ===================================================== */}

        <section className="border-t border-white/6">
          <div className="mx-auto max-w-360 px-5 py-20 md:px-8 md:py-24 lg:px-12">
            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={reveal}
              className="group relative overflow-hidden rounded-[36px] border border-white/[0.07] bg-[#101010] px-7 py-12 transition duration-500 hover:border-amber-400/15 sm:px-10 md:px-14 md:py-16"
            >
              <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-amber-400/[0.07] blur-3xl transition duration-700 group-hover:bg-amber-400/10" />

              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                  ¿Necesitás ayuda?
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                  Te ayudamos

                  <span className="block text-neutral-500">
                    a elegir.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-neutral-400">
                  Consultanos por stock, variantes,
                  productos y envíos. Te respondemos
                  directamente por WhatsApp.
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hola JStyles, necesito ayuda para elegir un producto del catálogo."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  <FaWhatsapp className="text-lg" />
                  Hablar con JStyles
                </a>
              </div>
            </Motion.div>
          </div>
        </section>
      </main>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="border-t border-white/6 bg-black">
        <div className="mx-auto flex max-w-360 flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8 lg:px-12">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-20 items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="JStyles Barber"
                  className="h-full w-full scale-125 object-contain"
                />
              </div>

              <div>
                <p className="font-black">
                  J
                  <span className="text-amber-400">
                    Styles
                  </span>{" "}
                  Barber
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-600">
                  Barber · Shop
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-neutral-600">
              Barbería, productos y estilo.
            </p>
          </div>

          <div className="text-sm text-neutral-600 md:text-right">
            <p>
              Laprida 4177 · Cochabamba 796
            </p>

            <p className="mt-2">
              Lunes a sábado · 10:30 a 20:00 hs
            </p>
          </div>
        </div>
      </footer>

      {/* ===================================================== */}
      {/* WHATSAPP FLOTANTE */}
      {/* ===================================================== */}

      <Motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hola, estoy viendo el catálogo de JStyles y quiero hacer una consulta."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a JStyles por WhatsApp"
        initial={
          reducirMovimiento
            ? false
            : {
                opacity: 0,
                scale: 0.8,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: reducirMovimiento ? 0 : 0.8,
          duration: 0.4,
        }}
        whileHover={
          reducirMovimiento
            ? undefined
            : {
                scale: 1.06,
                y: -2,
              }
        }
        whileTap={
          reducirMovimiento
            ? undefined
            : {
                scale: 0.96,
              }
        }
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-lg text-white shadow-2xl md:bottom-5 md:right-5 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-3 md:text-base md:font-bold"
      >
        <FaWhatsapp className="text-xl" />

        <span className="hidden md:inline">
          WhatsApp
        </span>
      </Motion.a>
    </div>
  );
}