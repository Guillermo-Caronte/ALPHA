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

export default function Pueblo() {
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
    <div className="min-h-screen flex flex-col text-[#333] bg-[#fffef6]">
      {/* CABECERA */}
      <header className="cabecera relative text-center overflow-hidden">
        <ul id="imagen-cabecera" className="relative list-none m-0 p-0">
          {images.map((src, i) => (
            <li key={i} className={`transition-opacity duration-700 ease-in-out ${i === index ? 'block' : 'hidden'}`}>
              <Image src={src} alt={`Imagen ${i}`} width={1600} height={400} className="w-full object-cover" />
            </li>
          ))}
        </ul>

        <button onClick={prevImage} className="before absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent border-none cursor-pointer z-10">
          <Image src="/images/flechaizq.png" alt="Anterior" width={40} height={40} />
        </button>
        <button onClick={nextImage} className="next absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none cursor-pointer z-10">
          <Image src="/images/flechder.png" alt="Siguiente" width={40} height={40} />
        </button>

        <div className="titulo absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
          <Image src="/images/titulo.png" alt="Titulo" className="imagen-titulo" width={600} height={100} />
        </div>
      </header>

      {/* NAVEGACIÓN */}
      <nav className="barra-navegacion bg-[#9b7654] text-white py-3 text-center">
        <ul className="flex justify-center gap-6">
          <li><a href="/">⛪ Ayuntamiento</a></li>
          <li><a href="/pueblo">🏡 El Pueblo</a></li>
          <li><a href="#">🧰 Servicios</a></li>
          <li><a href="/noticias">📰 Noticias</a></li>
          <li><a href="#">🍻 Eventos</a></li>
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="historia-contenido px-6 py-10 max-w-5xl mx-auto space-y-12">
        <section className="seccion-historia space-y-4">
          <h2 className="text-2xl font-bold">📖 Historia de Veguillas de la Sierra</h2>
          <div className="datos-destacados text-lg">
            <p>Veguillas de la Sierra es un municipio español de la provincia de Teruel, en la comunidad autónoma de Aragón. Se encuentra en un enclave histórico donde lindaban tres reinos medievales.</p>
          </div>
          <p>El municipio de Veguillas de la Sierra se sitúa en un punto estratégico donde convergían los antiguos reinos de Aragón, Castilla y Valencia...</p>
          <p>La localidad debe su nombre a las pequeñas vegas...</p>
        </section>

        <section className="seccion-historia space-y-4">
          <h2 className="text-2xl font-bold">🗺️ Ubicación y Geografía</h2>
          <p>Enclavado en la Sierra de Albarracín, el municipio se encuentra a una altitud considerable...</p>
          <p>El paisaje está marcado por la presencia de formaciones montañosas y barrancos...</p>
        </section>

        <section className="seccion-historia space-y-4">
          <h2 className="text-2xl font-bold">🏛️ Patrimonio Cultural</h2>
          <p>Entre los elementos más destacados del patrimonio cultural se encuentra la Iglesia de San Bernabé...</p>
          <p>La arquitectura tradicional se caracteriza por sus casas de piedra y sus calles estrechas...</p>
        </section>

        <section className="seccion-historia space-y-4">
          <h2 className="text-2xl font-bold">📸 Galería de Imágenes</h2>
          <div className="galeria-imagenes grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.slice(0, 4).map((src, i) => (
              <Image key={i} src={src} alt={`Galería ${i}`} width={300} height={200} className="rounded shadow" />
            ))}
          </div>
        </section>
      </main>

      {/* BARRA INFERIOR */}
      <div className="barra-inferior bg-[#9b7654] text-white py-3 text-center">
        <ul className="flex justify-center gap-6">
          <li><a href="#">🗺️ Mapa web</a></li>
          <li><a href="#">📞 Contacto</a></li>
          <li><a href="#">🧭 Comarca</a></li>
          <li><a href="#">ℹ️ DPT</a></li>
        </ul>
      </div>

      {/* PIE DE PÁGINA */}
      <footer className="pie bg-[#9b7654] text-white text-center py-4">
        <p>&copy; 2025 Ayuntamiento de Veguillas de La Sierra</p>
      </footer>
    </div>
  )
}
