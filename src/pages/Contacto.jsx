import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaCheckCircle, FaExclamationTriangle, FaPaperPlane, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from '../components/ContactForm.module.css';
import { useI18n } from '../i18n/locale';

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
  const { t, link } = useI18n();
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
      // Siempre se envía a la ruta registrada en el form estático de
      // index.html (action="/contact"), no a la ruta actual: la página es
      // accesible como /contact y /contacto, y Netlify solo procesa el
      // endpoint donde registró el formulario.
      const response = await fetch('/contact', {
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col">

      {/* Botón de retorno al inicio */}
      <div className="max-w-4xl mx-auto w-full mb-6">
        <Link to={link('/')} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium gap-2 transition-colors">
          <FaArrowLeft /> {t.contact.back}
        </Link>
      </div>

      <div className="max-w-4xl mx-auto my-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 w-full grid grid-cols-1 md:grid-cols-5">

        {/* Panel Izquierdo: Información Directa */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 md:col-span-2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t.contact.title}</h1>
            <p className="mt-3 text-blue-100 text-sm leading-relaxed">
              {t.contact.intro}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {/* Correo */}
            <a
              href="mailto:juanaac2003@gmail.com"
              className="flex items-center gap-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all group"
            >
              <div className="p-3 bg-white text-blue-700 rounded-lg group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-blue-200 font-medium">{t.contact.emailLabel}</p>
                <p className="text-sm font-semibold">juanaac2003@gmail.com</p>
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
                <p className="text-xs text-blue-200 font-medium">{t.contact.whatsappLabel}</p>
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
                <p className="text-xs text-blue-200 font-medium">{t.contact.linkedinLabel}</p>
                <p className="text-sm font-semibold">in/jadeveloper</p>
              </div>
            </a>
          </div>

          <div className="mt-8 text-xs text-blue-200 border-t border-white/10 pt-4">
            {t.contact.footerNote}
          </div>
        </div>

        {/* Panel Derecho: Formulario con Netlify Forms */}
        <div className="p-8 md:col-span-3 flex flex-col justify-center">

          {/* Estado: Éxito */}
          {status === 'success' && (
            <div className={styles.successMessage}>
              <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
              <h2 className="text-2xl font-bold text-gray-800">{t.contact.successTitle}</h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                {t.contact.successText}
              </p>
            </div>
          )}

          {/* Estado: Error */}
          {status === 'error' && (
            <div className={styles.errorMessage}>
              <FaExclamationTriangle className="text-6xl text-amber-500 mx-auto" />
              <h2 className="text-2xl font-bold text-gray-800">{t.contact.errorTitle}</h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                {t.contact.errorText}
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
              action="/contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={styles.formContainer}
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
                <h2 className="text-xl font-bold text-gray-800 mb-1">{t.contact.formTitle}</h2>
                <p className="text-xs text-gray-500">{t.contact.formSubtitle}</p>
              </div>

              {/* Campo Nombre */}
              <div>
                <label htmlFor="contact-nombre" className={styles.formLabel}>
                  {t.contact.nameLabel}
                </label>
                <input
                  id="contact-nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  placeholder={t.contact.namePlaceholder}
                  className={styles.formInput}
                />
              </div>

              {/* Campo Email */}
              <div>
                <label htmlFor="contact-email" className={styles.formLabel}>
                  {t.contact.emailFieldLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  placeholder={t.contact.emailPlaceholder}
                  className={styles.formInput}
                />
              </div>

              {/* Campo Asunto */}
              <div>
                <label htmlFor="contact-asunto" className={styles.formLabel}>
                  {t.contact.subjectLabel}
                </label>
                <input
                  id="contact-asunto"
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder={t.contact.subjectPlaceholder}
                  className={styles.formInput}
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label htmlFor="contact-mensaje" className={styles.formLabel}>
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-mensaje"
                  name="mensaje"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  placeholder={t.contact.messagePlaceholder}
                  className={styles.formTextarea}
                />
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={styles.formButton}
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> {t.contact.submit}
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
