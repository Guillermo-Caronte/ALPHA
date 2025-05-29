'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/images/pueblo2.png',
  '/images/fotopueblo.png',
  '/images/foto2.png',
  '/images/foto3.png',
  '/images/foto4.png',
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      <header className="cabecera">
        {/* Contenedor relativo para que los botones posicionados absolutamentes funcionen */}
        <div id="imagen-cabecera" className="relative w-full h-[60vh] overflow-hidden">
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                display: i === index ? 'block' : 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Image 
                src={src} 
                alt={`Imagen ${i}`} 
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          ))}

          <button
            onClick={prevImage}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
            aria-label="Anterior"
          >
            <Image src="/images/flechaizq.png" alt="Anterior" width={40} height={40} />
          </button>

          <button
            onClick={nextImage}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
            aria-label="Siguiente"
          >
            <Image src="/images/flechder.png" alt="Siguiente" width={40} height={40} />
          </button>
        </div>

        <div className="titulo" style={{ marginTop: '20px' }}>
          <Image src="/images/titulo.png" alt="Titulo" width={600} height={100} />
        </div>
      </header>

      <nav className="barra-navegacion">
        <ul className="gap-4">
          <li><a href="#">⛪Ayuntamiento⛪</a></li>
          <li><a href="/pueblo">🏡El Pueblo🏡</a></li>
          <li><a href="#">🧰Servicios🧰</a></li>
          <li><a href="/noticias">📰Noticias📰</a></li>
          <li><a href="#">🍻Eventos🍻</a></li>
        </ul>
      </nav>

      <main className="bloques-principales grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {[
          { src: '/images/icono1.png', title: 'Cómo llegar', desc: 'Visualice la forma más sencilla para llegar a Veguillas.' },
          { src: '/images/icono2.png', title: 'Patrimonio Natural', desc: 'Descubre la riqueza natural de la zona.' },
          { src: '/images/icono3.png', title: 'Excursiones', desc: 'Senderismo, rutas BTT y más actividades.' },
          { src: '/images/icono4.png', title: 'Galería de imágenes', desc: 'Espacios más representativos de nuestro pueblo.' },
        ].map((b, i) => (
          <div className="bloque text-center" key={i}>
            <Image src={b.src} alt={b.title} width={100} height={100} />
            <h3><a href="#">{b.title}</a></h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </main>

      <div className="barra-inferior">
        <ul className="flex gap-4 justify-center">
          <li><a href="#">🗺️Mapa web</a></li>
          <li><a href="#">📞Contacto</a></li>
          <li><a href="#">🧭Comarca</a></li>
          <li><a href="#">ℹ️DPT</a></li>
        </ul>
      </div>

      <footer className="pie text-center mt-4">
        <p>&copy; 2025 Ayuntamiento de Veguillas de La Sierra</p>
      </footer>
    </div>
  )
}
