# JStyles Barbershop Web

Sitio web oficial de **JStyles Barbershop**, desarrollado para presentar los servicios de la barbería, mostrar el catálogo de productos y facilitar el contacto directo con los clientes mediante WhatsApp.

## Sobre el proyecto

JStyles Barbershop Web es una aplicación web responsive desarrollada con React.

El sitio permite:

- Consultar servicios y precios de barbería.
- Explorar un catálogo de productos.
- Filtrar productos por categoría y subcategoría.
- Buscar productos por nombre o marca.
- Ver la ficha individual de cada producto.
- Consultar variantes disponibles.
- Acceder a productos relacionados.
- Contactar directamente con JStyles por WhatsApp.
- Acceder a Instagram y TikTok.
- Consultar ubicaciones y horarios.
- Navegar correctamente desde dispositivos móviles y escritorio.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Motion
- React Icons
- HTML5
- CSS3

## Categorías del catálogo

Actualmente el catálogo incluye:

- Barbería
  - Styling y fijación
  - Cuidado capilar
  - Color y matización
  - Barba y afeitado
  - Accesorios
  - Herramientas

- Cuidado personal
  - Perfumería
  - Cuidado facial
  - Cuidado corporal

- Vapers
  - Desechables

## Funcionalidades principales

### Catálogo dinámico

Los productos se administran desde archivos de datos JavaScript y se muestran dinámicamente en la interfaz.

### Búsqueda y filtros

El usuario puede buscar productos y filtrarlos por categoría y subcategoría.

### Ficha individual de producto

Cada producto cuenta con una página individual mediante rutas dinámicas:

```text
/producto/:slug