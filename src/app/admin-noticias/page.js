'use client';

import { useEffect, useState } from 'react';

const DEFAULT_NEWS = [
  // pon aquí las noticias por defecto como objetos JS, ejemplo:
  // { titulo: 'Noticia 1', fecha: '2025-05-01', descripcion: 'Descripción...', enlace: 'https://...' },
];

export default function AdminNoticias() {
  const [password, setPassword] = useState('');
  const [autorizado, setAutorizado] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [nueva, setNueva] = useState({ titulo: '', fecha: '', descripcion: '', enlace: '' });

  useEffect(() => {
    const guardadas = localStorage.getItem('noticias');
    if (guardadas) {
      setNoticias(JSON.parse(guardadas));
    }
  }, []);

  const verificarPassword = () => {
    if (password === 'veguillas2025') {
      setAutorizado(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const guardar = () => {
    const nuevasNoticias = [nueva, ...noticias];
    localStorage.setItem('noticias', JSON.stringify(nuevasNoticias));
    setNoticias(nuevasNoticias);
    setNueva({ titulo: '', fecha: '', descripcion: '', enlace: '' });
  };

  const eliminar = (index) => {
    const copia = [...noticias];
    copia.splice(index, 1);
    localStorage.setItem('noticias', JSON.stringify(copia));
    setNoticias(copia);
  };

  const restaurar = () => {
    if (confirm('¿Restaurar las noticias por defecto?')) {
      localStorage.setItem('noticias', JSON.stringify(DEFAULT_NEWS));
      setNoticias(DEFAULT_NEWS);
    }
  };

  if (!autorizado) {
    return (
      <div>
        <h2>Acceso Administrador</h2>
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <button onClick={verificarPassword}>Acceder</button>
      </div>
    );
  }

  return (
    <div>
      <h2>📝 Gestionar Noticias</h2>

      <input
        type="text"
        placeholder="Título"
        value={nueva.titulo}
        onChange={e => setNueva({ ...nueva, titulo: e.target.value })}
      />
      <input
        type="date"
        value={nueva.fecha}
        onChange={e => setNueva({ ...nueva, fecha: e.target.value })}
      />
      <textarea
        placeholder="Descripción"
        value={nueva.descripcion}
        onChange={e => setNueva({ ...nueva, descripcion: e.target.value })}
      />
      <input
        type="url"
        placeholder="Enlace"
        value={nueva.enlace}
        onChange={e => setNueva({ ...nueva, enlace: e.target.value })}
      />

      <button onClick={guardar}>Guardar Noticia</button>
      <button onClick={restaurar} style={{ marginLeft: 10 }}>
        Restaurar Noticias por Defecto
      </button>

      <h3>Noticias actuales</h3>
      {noticias.map((n, i) => (
        <div key={i}>
          <h4>{n.titulo}</h4>
          <p>{n.descripcion}</p>
          <a href={n.enlace} target="_blank" rel="noopener noreferrer">
            Ver enlace
          </a>
          <button onClick={() => eliminar(i)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
