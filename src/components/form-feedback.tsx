import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type FieldError = { id: string; label: string; message: string };
type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function labelFor(el: Field) {
  const lbl = el.labels?.[0]?.textContent?.trim() ?? el.name;
  return lbl.length > 60 ? "Consentement" : lbl;
}

function messageFor(el: Field) {
  const v = el.validity;
  if (v.valueMissing) return el instanceof HTMLInputElement && el.type === "checkbox" ? "Cette case doit être cochée." : "Ce champ est obligatoire.";
  if (v.typeMismatch) return "Saisissez une adresse e-mail valide, par exemple prenom@entreprise.fr.";
  if (v.tooLong) return "Ce texte est trop long.";
  return "Valeur incorrecte.";
}

/** Valide le formulaire, marque les champs en erreur et affiche un récapitulatif accessible. */
export function useFormFeedback(onValid: (form: HTMLFormElement) => void) {
  const [errors, setErrors] = useState<FieldError[]>([]);
  const [sent, setSent] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);

  useEffect(() => { if (errors.length) summaryRef.current?.focus(); }, [errors]);
  useEffect(() => { if (sent) confirmRef.current?.focus(); }, [sent]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const list: FieldError[] = [];
    Array.from(form.elements).forEach((n) => {
      if (!(n instanceof HTMLInputElement || n instanceof HTMLSelectElement || n instanceof HTMLTextAreaElement) || !n.willValidate) return;
      if (n instanceof HTMLInputElement && n.type !== "checkbox") n.value = n.value.trim();
      const ok = n.checkValidity();
      n.setAttribute("aria-invalid", ok ? "false" : "true");
      if (!ok) { if (!n.id) n.id = `f-${n.name}`; list.push({ id: n.id, label: labelFor(n), message: messageFor(n) }); }
    });
    setErrors(list);
    if (list.length === 0) { onValid(form); setSent(true); }
  }

  const Summary = () =>
    errors.length ? (
      <div ref={summaryRef} tabIndex={-1} role="alert" className="mb-4 rounded-lg border border-destructive bg-destructive/5 p-3 text-sm outline-none">
        <p className="flex items-center gap-2 font-semibold text-destructive"><AlertCircle className="size-4 shrink-0" aria-hidden />{errors.length === 1 ? "Un champ est à corriger" : `${errors.length} champs sont à corriger`}</p>
        <ul className="mt-2 space-y-1 text-foreground">
          {errors.map((er) => <li key={er.id}><a href={`#${er.id}`} className="underline">{er.label}</a> : {er.message}</li>)}
        </ul>
      </div>
    ) : null;

  const Confirmation = ({ title, children }: { title: string; children: ReactNode }) => (
    <div ref={confirmRef} tabIndex={-1} role="status" className="outline-none">
      <CheckCircle2 className="size-10 text-primary" aria-hidden />
      <h3 className="title-3 mt-3">{title}</h3>
      <div className="body-text">{children}</div>
    </div>
  );

  return { onSubmit, sent, Summary, Confirmation };
}
