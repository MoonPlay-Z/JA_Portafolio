import { personal } from "@/data/portfolio";

export const WHATSAPP_NUMBER = "584127723148";

export type ContactPayload = {
  nombre: string;
  empresa: string;
  tipoProyecto: string;
  presupuesto: string;
  mensaje: string;
};

export const PROJECT_TYPES = [
  "Sistema POS / inventario",
  "App móvil (Android)",
  "Plataforma web",
  "API / backend",
  "Otro",
] as const;

export const BUDGETS = [
  "Menos de 1.000 USD",
  "1.000 – 3.000 USD",
  "3.000 – 8.000 USD",
  "Más de 8.000 USD",
  "Aún no lo tengo definido",
] as const;

// El texto que llega a WhatsApp: una sola línea por dato, sin caracteres raros.
export function buildContactMessage(payload: ContactPayload): string {
  const lines = [`Hola Juan, soy ${payload.nombre.trim()}.`];

  if (payload.empresa.trim()) {
    lines.push(`Empresa o cargo: ${payload.empresa.trim()}`);
  }

  lines.push(
    `Tipo de proyecto: ${payload.tipoProyecto}`,
    `Presupuesto: ${payload.presupuesto}`,
    "",
    payload.mensaje.trim(),
  );

  return lines.join("\n");
}

export function buildWhatsAppUrl(payload: ContactPayload): string {
  const text = encodeURIComponent(buildContactMessage(payload));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Enlace simple de contacto directo, sin formulario.
export const directWhatsAppUrl = personal.whatsapp;
