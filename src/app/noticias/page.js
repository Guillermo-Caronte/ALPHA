'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const imagenesCabecera = [
  '/images/pueblo2.png',
  '/images/fotopueblo.png',
  '/images/foto2.png',
  '/images/foto3.png',
  '/images/foto4.png',
];

export default function NoticiasPage() {
  const [index, setIndex] = useState(0);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const storedNoticias = JSON.parse(localStorage.getItem('noticias') || '[]');
    setNoticias(storedNoticias);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenesCabecera.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setIndex((prev) => (prev + 1) % imagenesCabecera.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + imagenesCabecera.length) % imagenesCabecera.length);

  const formatearFecha = (fecha) =>
    new Date(fecha).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div>
      <header className="cabecera relative">
        <ul className="overflow-hidden">
          {imagenesCabecera.map((src, i) => (
            <li key={i} className={i === index ? 'block' : 'hidden'}>
              <Image src={src} alt={`Imagen ${i}`} width={800} height={300} />
            </li>
          ))}
        </ul>
        <button onClick={prevImage} className="before absolute left-2 top-1/2">
          <Image src="/images/flechaizq.png" alt="Anterior" width={40} height={40} />
        </button>
        <button onClick={nextImage} className="next absolute right-2 top-1/2">
          <Image src="/images/flechder.png" alt="Siguiente" width={40} height={40} />
        </button>
        <div className="titulo text-center mt-4">
          <Image src="/images/titulo.png" alt="Titulo" width={600} height={100} className="imagen-titulo mx-auto" />
        </div>
      </header>

      <nav className="barra-navegacion my-4">
        <ul className="flex justify-center gap-4">
          <li><a href="/">⛪Ayuntamiento⛪</a></li>
          <li><a href="#">🏡El Pueblo🏡</a></li>
          <li><a href="#">🧰Servicios🧰</a></li>
          <li><a href="/noticias">📰Noticias📰</a></li>
          <li><a href="#">🍻Eventos🍻</a></li>
        </ul>
      </nav>

      <section className="seccion-noticias p-4">
        <h2 className="text-2xl mb-2">📰 Noticias Recientes 📰</h2>
        <a href="/admin-noticias" className="text-sm text-gray-600 mb-4 inline-block">⚙️ Administrar</a>
        <div className="contenedor-noticias grid gap-6 mt-4">
          {noticias.map((noticia, i) => (
            <article key={i} className="noticia border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{noticia.titulo}</h3>
              <p className="fecha text-sm text-gray-500">{formatearFecha(noticia.fecha)}</p>
              <p>{noticia.descripcion}</p>
              <a href={noticia.enlace} target="_blank" rel="noopener noreferrer" className="leer-mas text-blue-500 underline">Leer más →</a>
            </article>
          ))}
        </div>
      </section>

      <div className="barra-inferior mt-6">
        <ul className="flex justify-center gap-4">
          <li><a href="#">🗺️Mapa web</a></li>
          <li><a href="#">📞Contacto</a></li>
          <li><a href="#">🧭Comarca</a></li>
          <li><a href="#">ℹ️DPT</a></li>
        </ul>
      </div>

      <footer className="pie text-center mt-6">
        <p>&copy; 2025 Ayuntamiento de Veguillas de La Sierra</p>
      </footer>
    </div>
  );
}
