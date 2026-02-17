import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EmailCaptureFormProps {
  buttonText?: string;
  microcopy?: string;
  className?: string;
  variant?: "inline" | "stacked" | "compact";
  dark?: boolean;
}

const EmailCaptureForm = ({
  buttonText = "Envíame el diagnóstico",
  microcopy = "Te lo mando por email. Sin spam. Si no te aporta, te borras.",
  className = "",
  variant = "inline",
  dark = false,
}: EmailCaptureFormProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Oye, aquí falta un email válido.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`border border-foreground/10 p-6 ${className}`}>
        <p className="font-heading text-lg font-bold">✓ Listo. Revisa tu bandeja.</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Si no lo ves, mira en spam.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} ${
        variant === "inline"
          ? "flex flex-col sm:flex-row gap-3 items-start"
          : "flex flex-col gap-3"
      }`}
    >
      <div className="flex-1 w-full">
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className={`w-full border-b-2 bg-transparent px-0 py-3 font-mono text-sm 
                     placeholder:text-muted-foreground focus:outline-none transition-colors
                     ${dark
                       ? "border-surface-dark-foreground/30 focus:border-accent text-surface-dark-foreground"
                       : "border-foreground/20 focus:border-accent text-foreground"
                     }`}
          required
        />
        {error && <p className="mt-1 text-xs text-destructive font-mono">{error}</p>}
      </div>
      <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto whitespace-nowrap text-sm">
        {buttonText}
      </Button>
      {microcopy && (
        <p className={`text-[11px] w-full font-mono ${dark ? "text-surface-dark-foreground/40" : "text-muted-foreground"}`}>
          {microcopy}
        </p>
      )}
    </form>
  );
};

export default EmailCaptureForm;
