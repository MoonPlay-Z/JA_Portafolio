import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaPaperPlane, FaArrowLeft, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────────────────────
// Formulario de Contacto — Netlify Forms
// Los mensajes se reciben en el dashboard de Netlify y por email automáticamente.
// No requiere backend, no expone credenciales, funciona 100% en el deploy estático.
// ─────────────────────────────────────────────────────────────────────────────

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contacto-portafolio',
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        // Resetear después de 8 segundos
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">

      {/* Botón de retorno al inicio */}
      <div className="max-w-4xl mx-auto w-full mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium gap-2 transition-colors">
          <FaArrowLeft /> Volver al Inicio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 w-full grid grid-cols-1 md:grid-cols-5">

        {/* Panel Izquierdo: Información Directa */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 md:col-span-2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">¡Contáctame!</h1>
            <p className="mt-3 text-blue-100 text-sm leading-relaxed">
              ¿Tienes algún proyecto en mente o una vacante que se ajuste a mi perfil? Hablemos de cómo puedo aportar valor a tu equipo.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Correo */}
            <a
              href="mailto:Arcila.juan10@gmail.com"
              className="flex items-center gap-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all group"
            >
              <div className="p-3 bg-white text-blue-700 rounded-lg group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-blue-200 font-medium">Correo Electrónico</p>
                <p className="text-sm font-semibold">Arcila.juan10@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/584127723148?text=Hola%20Juan,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all group"
            >
              <div className="p-3 bg-white text-green-600 rounded-lg group-hover:scale-110 transition-transform">
                <FaWhatsapp className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-blue-200 font-medium">WhatsApp</p>
                <p className="text-sm font-semibold">+58 412-7723148</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jadeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all group"
            >
              <div className="p-3 bg-white text-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                <FaLinkedin className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-blue-200 font-medium">LinkedIn</p>
                <p className="text-sm font-semibold">in/jadeveloper</p>
              </div>
            </a>
          </div>

          <div className="mt-8 text-xs text-blue-200 border-t border-white/10 pt-4">
            Especializado en perfiles de desarrollo de software europeos.
          </div>
        </div>

        {/* Panel Derecho: Formulario con Netlify Forms */}
        <div className="p-8 md:col-span-3 flex flex-col justify-center">

          {/* Estado: Éxito */}
          {status === 'success' && (
            <div className="text-center py-8 space-y-4">
              <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
              <h2 className="text-2xl font-bold text-gray-800">¡Mensaje Enviado!</h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Tu mensaje ha sido recibido. Me pondré en contacto contigo a la brevedad posible a través de <strong>Arcila.juan10@gmail.com</strong>.
              </p>
            </div>
          )}

          {/* Estado: Error */}
          {status === 'error' && (
            <div className="text-center py-8 space-y-4">
              <FaExclamationTriangle className="text-6xl text-amber-500 mx-auto" />
              <h2 className="text-2xl font-bold text-gray-800">Error al Enviar</h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Hubo un problema al enviar el mensaje. Puedes contactarme directamente por correo o WhatsApp desde el panel izquierdo.
              </p>
            </div>
          )}

          {/* Estado: Formulario (idle o submitting) */}
          {(status === 'idle' || status === 'submitting') && (
            // data-netlify="true" — Netlify detecta este formulario en el build
            // y crea automáticamente el endpoint de recepción de mensajes.
            // netlify-honeypot — campo invisible anti-spam (bot-field).
            <form
              name="contacto-portafolio"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Campo oculto requerido por Netlify Forms */}
              <input type="hidden" name="form-name" value="contacto-portafolio" />

              {/* Honeypot anti-spam (oculto para humanos, visible para bots) */}
              <p className="hidden" aria-hidden="true">
                <label>
                  No llenar si eres humano: <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">Enviar un mensaje</h2>
                <p className="text-xs text-gray-500">Rellena el formulario y te responderé a la brevedad.</p>
              </div>

              {/* Campo Nombre */}
              <div>
                <label htmlFor="contact-nombre" className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Nombre Completo *
                </label>
                <input
                  id="contact-nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  placeholder="Ej: John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700 disabled:bg-gray-50 disabled:opacity-60"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Tu Correo Electrónico *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  placeholder="Ej: j.doe@empresa.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700 disabled:bg-gray-50 disabled:opacity-60"
                />
              </div>

              {/* Campo Asunto */}
              <div>
                <label htmlFor="contact-asunto" className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Asunto / Motivo
                </label>
                <input
                  id="contact-asunto"
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="Ej: Propuesta de Vacante Remota"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700 disabled:bg-gray-50 disabled:opacity-60"
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label htmlFor="contact-mensaje" className="block text-xs font-semibold text-gray-600 uppercase mb-2">
                  Tu Mensaje *
                </label>
                <textarea
                  id="contact-mensaje"
                  name="mensaje"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  placeholder="Escribe aquí tu propuesta o mensaje..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700 resize-none disabled:bg-gray-50 disabled:opacity-60"
                />
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
