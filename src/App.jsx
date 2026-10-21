import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { CV } from './pages/CV'
import { Contacto } from './pages/Contacto'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <Routes>
          {/* Español (por defecto, sin prefijo) */}
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Inglés */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/cv" element={<CV />} />
          <Route path="/en/contact" element={<Contacto />} />
          <Route path="/en/contacto" element={<Contacto />} />

          {/* Estonio */}
          <Route path="/et" element={<Home />} />
          <Route path="/et/cv" element={<CV />} />
          <Route path="/et/contact" element={<Contacto />} />
          <Route path="/et/contacto" element={<Contacto />} />

          {/* Cualquier ruta desconocida vuelve al inicio en el idioma actual */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
