import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaPaperPlane, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      alert('Por favor, rellena todos los campos obligatorios.');
      return;
    }

    // Compila el cuerpo para el mailto
    const mailtoSubject = encodeURIComponent(formData.asunto || `Contacto de ${formData.nombre}`);
    const mailtoBody = encodeURIComponent(
      `Nombre: ${formData.nombre}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.mensaje}`
    );

    // Redirige al cliente de correo local
    window.location.href = `mailto:Arcila.juan10@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    // Limpiar el formulario
    setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      
      {/* Botón de retorno al inicio */}
      <div className="max-w-4xl mx-auto w-full mb-6">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium gap-2">
          <FaArrowLeft /> Volver al Inicio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 w-full grid grid-cols-1 md:grid-cols-5">
        
        {/* Panel Izquierdo: Información Directa */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 md:col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">¡Contáctame!</h2>
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

        {/* Panel Derecho: Formulario interactivo */}
        <div className="p-8 md:col-span-3 flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <FaCheckCircle className="text-6xl text-green-500 mx-auto animate-bounce" />
              <h3 className="text-2xl font-bold text-gray-800">¡Mensaje Preparado!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Se ha abierto tu cliente de correo electrónico para enviar el mensaje a **Arcila.juan10@gmail.com**. Si no se abrió de forma automática, puedes hacer clic en el panel izquierdo para enviar el correo directamente.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Enviar un mensaje</h3>
                <p className="text-xs text-gray-500">Rellena el formulario para iniciar la redacción del correo.</p>
              </div>

              {/* Campo Nombre */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej: John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700"
                />
              </div>

              {/* Campo Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Tu Correo Electrónico *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Ej: j.doe@empresa.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700"
                />
              </div>

              {/* Campo Asunto */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Asunto / Motivo</label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Ej: Propuesta de Vacante Remota"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700"
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Tu Mensaje *</label>
                <textarea
                  name="mensaje"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Escribe aquí tu propuesta o mensaje..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm text-gray-700 resize-none"
                ></textarea>
              </div>

              {/* Botón de Enviar */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm"
              >
                <FaPaperPlane /> Redactar Correo
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
