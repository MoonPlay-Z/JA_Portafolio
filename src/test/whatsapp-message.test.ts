import { describe, expect, it } from "vitest";
import {
  WHATSAPP_NUMBER,
  buildContactMessage,
  buildWhatsAppUrl,
  type ContactPayload,
} from "@/lib/whatsapp";
import { personal } from "@/data/portfolio";

const payload: ContactPayload = {
  nombre: "María Pérez",
  empresa: "Ferretería El Tornillo",
  tipoProyecto: "Sistema POS / inventario",
  presupuesto: "1.000 – 3.000 USD",
  mensaje: "Necesito cobrar sin internet.",
};

describe("formulario de contacto por WhatsApp", () => {
  it("envía al mismo número que la tarjeta de contacto", () => {
    expect(personal.whatsapp).toContain(WHATSAPP_NUMBER);
    expect(buildWhatsAppUrl(payload).startsWith(`https://wa.me/${WHATSAPP_NUMBER}?text=`)).toBe(
      true,
    );
  });

  it("mete todos los datos del formulario en el mensaje", () => {
    const message = buildContactMessage(payload);
    expect(message).toContain("Hola Juan, soy María Pérez.");
    expect(message).toContain("Empresa o cargo: Ferretería El Tornillo");
    expect(message).toContain("Tipo de proyecto: Sistema POS / inventario");
    expect(message).toContain("Presupuesto: 1.000 – 3.000 USD");
    expect(message).toContain("Necesito cobrar sin internet.");
  });

  it("quita la línea de empresa cuando se deja vacía", () => {
    const message = buildContactMessage({ ...payload, empresa: "   " });
    expect(message).not.toContain("Empresa o cargo:");
    expect(message).toContain("Tipo de proyecto:");
  });

  it("escapa el mensaje para que el enlace no se rompa", () => {
    const url = buildWhatsAppUrl(payload);
    const text = url.split("?text=")[1] ?? "";
    expect(url).not.toContain(" ");
    expect(url).not.toContain("\n");
    expect(decodeURIComponent(text)).toBe(buildContactMessage(payload));
  });
});
