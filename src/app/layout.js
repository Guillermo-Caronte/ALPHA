import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // usa ./ en vez de ../ si estás en /app
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}