# Lic-Antonella-Maccario

Landing de la Lic. Antonella Maccario, nutricionista UBA (MN 13637).

Sitio responsive con servicios profesionales, consultorios de Once y Lanús, consultas virtuales, PDF de servicios y enlaces a WhatsApp, Instagram y tienda online.

## Vista local

Con Node.js instalado, ejecutar:

```sh
npm start
```

Abrir http://127.0.0.1:4174. No requiere instalar dependencias.

## Publicación

La carpeta `dist` contiene el sitio estático completo, listo para alojar. No requiere compilación.

La configuración de Sites está en `.openai/hosting.json`.

## Archivos

- `dist/index.html`: contenido y estructura.
- `dist/style.css`: estilos y adaptación a celulares.
- `dist/script.js`: íconos SVG y enlaces de reserva.
- `dist/assets/`: identidad visual y PDF de servicios.

Los datos de contacto y horarios se editan en `dist/index.html`. El mensaje de WhatsApp se configura en `dist/script.js`.
