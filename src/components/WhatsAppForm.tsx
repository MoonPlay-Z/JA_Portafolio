import { useState } from "react";
import { z } from "zod";
import {
  BUDGETS,
  PROJECT_TYPES,
  buildContactMessage,
  buildWhatsAppUrl,
  type ContactPayload,
} from "@/lib/whatsapp";
import { Check, Copy, Send } from "lucide-react";

const schema = z.object({
  nombre: z.string().min(2, "Escribe tu nombre.").max(60, "Máximo 60 caracteres."),
  empresa: z.string().max(80, "Máximo 80 caracteres."),
  tipoProyecto: z.string().min(1, "Elige el tipo de proyecto."),
  presupuesto: z.string().min(1, "Elige un rango de presupuesto."),
  mensaje: z
    .string()
    .min(10, "Cuéntame un poco más (mínimo 10 caracteres).")
    .max(800, "Máximo 800 caracteres."),
});

type Errors = Partial<Record<keyof ContactPayload, string>>;

const empty: ContactPayload = {
  nombre: "",
  empresa: "",
  tipoProyecto: PROJECT_TYPES[0],
  presupuesto: BUDGETS[0],
  mensaje: "",
};

export function WhatsAppForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [openedUrl, setOpenedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const field = <K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactPayload;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    const url = buildWhatsAppUrl(parsed.data);
    setOpenedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(buildContactMessage(values));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const inputBase =
    "w-full rounded-xl border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="rounded-3xl border border-border bg-card p-5 sm:p-8">
      <form onSubmit={onSubmit} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-xs text-code-keyword">nombre *</span>
            <input
              type="text"
              value={values.nombre}
              onChange={(e) => field("nombre", e.target.value)}
              placeholder="Tu nombre"
              aria-invalid={Boolean(errors.nombre)}
              className={`${inputBase} mt-1 ${errors.nombre ? "border-destructive" : "border-border"}`}
            />
            {errors.nombre && (
              <span className="mt-1 block text-xs text-destructive">{errors.nombre}</span>
            )}
          </label>

          <label className="block">
            <span className="font-mono text-xs text-code-keyword">empresa o cargo</span>
            <input
              type="text"
              value={values.empresa}
              onChange={(e) => field("empresa", e.target.value)}
              placeholder="Opcional"
              aria-invalid={Boolean(errors.empresa)}
              className={`${inputBase} mt-1 ${errors.empresa ? "border-destructive" : "border-border"}`}
            />
            {errors.empresa && (
              <span className="mt-1 block text-xs text-destructive">{errors.empresa}</span>
            )}
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="font-mono text-xs text-code-keyword">tipo de proyecto *</span>
            <select
              value={values.tipoProyecto}
              onChange={(e) => field("tipoProyecto", e.target.value)}
              className={`${inputBase} mt-1 ${errors.tipoProyecto ? "border-destructive" : "border-border"}`}
            >
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.tipoProyecto && (
              <span className="mt-1 block text-xs text-destructive">{errors.tipoProyecto}</span>
            )}
          </label>

          <label className="block">
            <span className="font-mono text-xs text-code-keyword">presupuesto *</span>
            <select
              value={values.presupuesto}
              onChange={(e) => field("presupuesto", e.target.value)}
              className={`${inputBase} mt-1 ${errors.presupuesto ? "border-destructive" : "border-border"}`}
            >
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            {errors.presupuesto && (
              <span className="mt-1 block text-xs text-destructive">{errors.presupuesto}</span>
            )}
          </label>
        </div>

        <label className="block">
          <span className="font-mono text-xs text-code-keyword">mensaje *</span>
          <textarea
            value={values.mensaje}
            onChange={(e) => field("mensaje", e.target.value)}
            rows={5}
            placeholder="Qué necesitas, para cuándo y qué tienes hoy."
            aria-invalid={Boolean(errors.mensaje)}
            className={`${inputBase} mt-1 resize-y ${errors.mensaje ? "border-destructive" : "border-border"}`}
          />
          {errors.mensaje && (
            <span className="mt-1 block text-xs text-destructive">{errors.mensaje}</span>
          )}
        </label>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-success px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Send size={16} /> Enviar por WhatsApp
          </button>
          <button
            type="button"
            onClick={copyMessage}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-border px-4 py-3 font-mono text-sm transition-colors hover:border-primary"
          >
            {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
            {copied ? "copiado" : "copiar mensaje"}
          </button>
        </div>
      </form>

      {openedUrl && (
        <div className="mt-6 rounded-2xl border border-success/40 bg-secondary p-5">
          <p className="font-mono text-sm text-secondary-foreground">
            // se abrió WhatsApp con tu mensaje listo para enviar
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Si no se abrió la ventana, usa el enlace directo:
          </p>
          <a
            href={openedUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block break-all font-mono text-sm font-semibold text-primary underline"
          >
            abrir WhatsApp de nuevo →
          </a>
        </div>
      )}
    </div>
  );
}
