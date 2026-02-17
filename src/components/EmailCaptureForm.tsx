import { useState } from "react";
import { Button } from "@/components/ui/button";

interface EmailCaptureFormProps {
  buttonText?: string;
  microcopy?: string;
  className?: string;
  variant?: "inline" | "stacked" | "compact";
}

const EmailCaptureForm = ({
  buttonText = "Envíame el diagnóstico",
  microcopy = "Te lo mando por email. Sin spam. Si no te aporta, te borras.",
  className = "",
  variant = "inline",
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
      <div className={`rounded-lg bg-surface-paper p-6 text-center ${className}`}>
        <p className="font-heading text-xl text-heading">✓ Listo. Revisa tu bandeja.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Si no lo ves, mira en spam. Y si no te aporta, te borras con un clic.
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
          : variant === "compact"
          ? "flex flex-col gap-2"
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
          className="w-full rounded-md border border-input bg-background px-4 py-3 font-body text-sm 
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent
                     transition-all"
          required
        />
        {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
      </div>
      <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto whitespace-nowrap">
        {buttonText}
      </Button>
      {microcopy && (
        <p className="text-xs text-muted-foreground w-full">
          {microcopy}
        </p>
      )}
    </form>
  );
};

export default EmailCaptureForm;
