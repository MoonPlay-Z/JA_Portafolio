const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

// Fecha leída del texto ISO, sin toLocaleDateString: la zona horaria del servidor
// y la del navegador no pueden cambiar el día que se muestra.
export function formatDate(iso: string): string {
  const parts = iso.split("-");
  const year = parts[0] ?? "";
  const month = Number(parts[1] ?? "1");
  const day = Number(parts[2] ?? "1");
  const name = MONTHS[month - 1] ?? "";
  return `${day} de ${name} de ${year}`;
}
