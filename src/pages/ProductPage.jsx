import { Link, useParams } from "react-router";
import { useEffect, useMemo } from "react";

import { motion as Motion, useReducedMotion } from "motion/react";

import { FaWhatsapp } from "react-icons/fa";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiPackage,
  FiTag,
} from "react-icons/fi";

import { productos } from "../data/productos";
import { fallbackImage, whatsappNumber } from "../data/site";

// =====================================================
// GENERAR URL AMIGABLE
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
// PRODUCT PAGE
// =====================================================

export default function ProductPage() {
  const { slug } = useParams();

  const reducirMovimiento = useReducedMotion();

  // Cada vez que entramos a un producto arrancamos arriba.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: reducirMovimiento ? "auto" : "smooth",
    });
  }, [slug, reducirMovimiento]);

  // =====================================================
  // BUSCAR PRODUCTO
  // =====================================================

  const producto = useMemo(() => {
    return productos.find(
      (item) => crearSlug(item.nombre) === slug
    );
  }, [slug]);

  // =====================================================
  // PRODUCTOS RELACIONADOS
  // =====================================================

  const relacionados = useMemo(() => {
    if (!producto) {
      return [];
    }

    return productos
      .filter(
        (item) =>
          item.id !== producto.id &&
          (
            item.subcategoria === producto.subcategoria ||
            item.categoria === producto.categoria
          )
      )
      .slice(0, 3);
  }, [producto]);

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

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: reducirMovimiento ? 0 : -30,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: reducirMovimiento ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reducirMovimiento ? 0 : 0.08,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: reducirMovimiento ? 0 : 18,
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

  // =====================================================
  // PRODUCTO NO ENCONTRADO
  // =====================================================

  if (!producto) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#070707] px-5 text-white">
        <Motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="w-full max-w-xl text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/4">
            <FiPackage className="text-2xl text-neutral-500" />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
            JStyles
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Producto no encontrado.
          </h1>

          <p className="mx-auto mt-5 max-w-md leading-7 text-neutral-500">
            El producto que estás buscando no existe o ya no está
            disponible en el catálogo.
          </p>

          <Link
            to="/catalogo"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
          >
            <FiArrowLeft />
            Volver al catálogo
          </Link>
        </Motion.div>
      </div>
    );
  }

  // =====================================================
  // VARIANTES
  // =====================================================

  const variantes =
    Array.isArray(producto.variantes)
      ? producto.variantes.map((variante) => {
          if (typeof variante === "string") {
            return {
              nombre: variante,
              imagen: null,
            };
          }

          return {
            nombre: variante.nombre,
            imagen: variante.imagen || null,
          };
        })
      : [];

  // =====================================================
  // WHATSAPP
  // =====================================================

  const mensajeWhatsapp = encodeURIComponent(
    `Hola JStyles, estoy viendo ${producto.nombre} en la web. ¿Tenés stock? ¿Hacen envíos?`
  );

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
          <Link
            to="/"
            className="flex items-center gap-4"
          >
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
                Barber · Shop
              </p>
            </div>
          </Link>

          <Link
            to="/catalogo"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-neutral-300 transition duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
          >
            <FiArrowLeft className="transition duration-300 group-hover:-translate-x-1" />

            <span className="hidden sm:inline">
              Volver al catálogo
            </span>

            <span className="sm:hidden">
              Catálogo
            </span>
          </Link>
        </div>
      </Motion.header>

      <main>
        {/* ===================================================== */}
        {/* PRODUCTO */}
        {/* ===================================================== */}

        <section className="relative overflow-hidden">
          <div className="absolute -left-44 top-0 h-125 w-125 rounded-full bg-amber-400/4 blur-3xl" />

          <div className="absolute -right-40 top-40 h-125 w-125 rounded-full bg-white/2 blur-3xl" />

          <div className="relative mx-auto max-w-360 px-5 py-10 md:px-8 md:py-16 lg:px-12">
            {/* BREADCRUMB */}

            <Motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="mb-9 flex flex-wrap items-center gap-2 text-xs text-neutral-600"
            >
              <Link
                to="/"
                className="transition hover:text-white"
              >
                Inicio
              </Link>

              <span>/</span>

              <Link
                to="/catalogo"
                className="transition hover:text-white"
              >
                Catálogo
              </Link>

              <span>/</span>

              <span className="text-neutral-400">
                {producto.nombre}
              </span>
            </Motion.div>

            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              {/* ================================================= */}
              {/* IMAGEN */}
              {/* ================================================= */}

              <Motion.div
                initial="hidden"
                animate="visible"
                variants={revealLeft}
                className="relative"
              >
                <div className="absolute -inset-5 rounded-[45px] bg-amber-400/2.5 blur-3xl" />

                <div className="group relative overflow-hidden rounded-4xl border border-white/[0.07] bg-[#0d0d0d]">
                  <div className="flex aspect-square items-center justify-center">
                    <img
                      src={producto.imagen || fallbackImage}
                      alt={producto.nombre}
                      className="h-full w-full object-contain p-5 transition duration-700 ease-out group-hover:scale-[1.025]"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                      }}
                    />
                  </div>

                  {producto.destacado && (
                    <span className="absolute left-5 top-5 rounded-full border border-amber-400/25 bg-black/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300 backdrop-blur-md">
                      JStyles Selection
                    </span>
                  )}
                </div>
              </Motion.div>

              {/* ================================================= */}
              {/* INFORMACIÓN */}
              {/* ================================================= */}

              <Motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col justify-center"
              >
                {/* CATEGORÍA */}

                <Motion.div
                  variants={staggerItem}
                  className="flex flex-wrap items-center gap-3"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
                    <FiTag />

                    {producto.categoria}
                  </span>

                  <span className="text-neutral-700">
                    /
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    {producto.subcategoria}
                  </span>
                </Motion.div>

                {/* MARCA */}

                {producto.marca && (
                  <Motion.p
                    variants={staggerItem}
                    className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-neutral-600"
                  >
                    {producto.marca}
                  </Motion.p>
                )}

                {/* NOMBRE */}

                <Motion.h1
                  variants={staggerItem}
                  className="mt-3 max-w-2xl text-4xl font-black leading-none tracking-[-0.04em] sm:text-5xl md:text-6xl"
                >
                  {producto.nombre}
                </Motion.h1>

                {/* PRECIO */}

                <Motion.div
                  variants={staggerItem}
                  className="mt-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                    Precio
                  </p>

                  <p className="mt-2 text-3xl font-black text-white md:text-4xl">
                    {producto.precio}
                  </p>
                </Motion.div>

                {/* DESCRIPCIÓN */}

                <Motion.p
                  variants={staggerItem}
                  className="mt-8 max-w-xl text-base leading-8 text-neutral-400"
                >
                  {producto.descripcion}
                </Motion.p>

                {/* VARIANTES */}

                {variantes.length > 0 && (
                  <Motion.div
                    variants={staggerItem}
                    className="mt-8 border-t border-white/[0.07] pt-7"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">
                      Opciones disponibles
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {variantes.map((variante) => (
                        <span
                          key={variante.nombre}
                          className="inline-flex items-center gap-2 rounded-full border border-white/9 bg-white/[0.035] px-4 py-2 text-sm text-neutral-300"
                        >
                          <FiCheck className="text-amber-400" />

                          {variante.nombre}
                        </span>
                      ))}
                    </div>
                  </Motion.div>
                )}

                {/* CONSULTA */}

                <Motion.div
                  variants={staggerItem}
                  className="mt-9 flex flex-col gap-3 sm:flex-row"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${mensajeWhatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    <FaWhatsapp className="text-lg" />

                    Consultar por WhatsApp

                    <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                  </a>

                  <Link
                    to="/catalogo"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-7 py-4 text-sm font-semibold text-neutral-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/4 hover:text-white"
                  >
                    Seguir viendo productos
                  </Link>
                </Motion.div>

                {/* INFORMACIÓN */}

                <Motion.div
                  variants={staggerItem}
                  className="mt-9 grid gap-3 border-t border-white/[0.07] pt-7 sm:grid-cols-2"
                >
                  <div className="flex items-start gap-3">
                    <FiCheck className="mt-1 shrink-0 text-amber-400" />

                    <div>
                      <p className="text-sm font-semibold">
                        Consultá disponibilidad
                      </p>

                      <p className="mt-1 text-xs leading-5 text-neutral-600">
                        Confirmamos stock antes de coordinar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FiPackage className="mt-1 shrink-0 text-amber-400" />

                    <div>
                      <p className="text-sm font-semibold">
                        Envíos
                      </p>

                      <p className="mt-1 text-xs leading-5 text-neutral-600">
                        Coordinamos la entrega por WhatsApp.
                      </p>
                    </div>
                  </div>
                </Motion.div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* PRODUCTOS RELACIONADOS */}
        {/* ===================================================== */}

        {relacionados.length > 0 && (
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
                className="mb-12"
              >
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-amber-400" />

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                    También te puede interesar
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                  Productos relacionados.
                </h2>
              </Motion.div>

              <Motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                variants={staggerContainer}
                className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3"
              >
                {relacionados.map((item) => (
                  <Motion.article
                    key={item.id}
                    variants={staggerItem}
                    whileHover={
                      reducirMovimiento
                        ? undefined
                        : {
                            y: -6,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
                    className="group"
                  >
                    <Link
                      to={`/producto/${crearSlug(item.nombre)}`}
                      className="block"
                    >
                      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d0d0d] transition duration-500 group-hover:border-amber-400/20">
                        <div className="flex aspect-[4/4.2] items-center justify-center overflow-hidden">
                          <img
                            src={item.imagen || fallbackImage}
                            alt={item.nombre}
                            loading="lazy"
                            className="h-full w-full object-contain p-4 transition duration-700 group-hover:scale-[1.04]"
                            onError={(e) => {
                              e.currentTarget.src = fallbackImage;
                            }}
                          />
                        </div>
                      </div>

                      <div className="px-1 pt-5">
                        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          {item.marca && (
                            <>
                              <span>{item.marca}</span>

                              <span className="text-neutral-700">
                                /
                              </span>
                            </>
                          )}

                          <span>
                            {item.subcategoria}
                          </span>
                        </div>

                        <div className="flex items-start justify-between gap-5">
                          <h3 className="max-w-[72%] text-xl font-bold leading-snug tracking-tight transition group-hover:text-amber-300">
                            {item.nombre}
                          </h3>

                          <span className="shrink-0 text-lg font-black">
                            {item.precio}
                          </span>
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
                          <span className="text-xs font-bold uppercase tracking-[0.15em] text-neutral-600 transition group-hover:text-white">
                            Ver producto
                          </span>

                          <FiArrowRight className="text-neutral-700 transition duration-300 group-hover:translate-x-1 group-hover:text-amber-400" />
                        </div>
                      </div>
                    </Link>
                  </Motion.article>
                ))}
              </Motion.div>
            </div>
          </section>
        )}
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
        href={`https://wa.me/${whatsappNumber}?text=${mensajeWhatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Consultar por ${producto.nombre}`}
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
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-2xl md:h-auto md:w-auto md:gap-2 md:px-5 md:py-3 md:text-base md:font-bold"
      >
        <FaWhatsapp className="text-xl" />

        <span className="hidden md:inline">
          WhatsApp
        </span>
      </Motion.a>
    </div>
  );
}