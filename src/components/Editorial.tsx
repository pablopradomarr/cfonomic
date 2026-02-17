import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  paper?: boolean;
  dark?: boolean;
  id?: string;
}

const Section = ({ children, className = "", paper = false, dark = false, id }: SectionProps) => (
  <section
    id={id}
    className={`py-20 md:py-32 ${
      dark ? "section-dark" : paper ? "section-paper" : "section-white"
    } ${className}`}
  >
    <div className="container-wide">{children}</div>
  </section>
);

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeIn = ({ children, className = "", delay = 0 }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  large?: boolean;
}

const SectionHeading = ({ tag, title, subtitle, className = "", large = false }: SectionHeadingProps) => (
  <div className={`mb-14 md:mb-20 ${className}`}>
    {tag && <span className="tag-label mb-5 block">{tag}</span>}
    <h2
      className={`font-heading font-bold leading-[1.05] tracking-tighter ${
        large
          ? "text-[clamp(2.5rem,6vw,5.5rem)]"
          : "text-[clamp(2rem,5vw,4rem)]"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
        {subtitle}
      </p>
    )}
  </div>
);

const PullQuote = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <blockquote className={`pull-quote ${className}`}>{children}</blockquote>
);

const BulletList = ({ items, icon = "—" }: { items: string[]; icon?: string }) => (
  <ul className="bullet-group">
    {items.map((item, i) => (
      <li key={i} className="bullet-item text-sm md:text-base">
        <span className="text-accent font-mono font-bold shrink-0 text-xs mt-1">{icon}</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Divider = ({ accent = false }: { accent?: boolean }) => (
  <div className={accent ? "divider-accent" : "divider"} />
);

export { Section, FadeIn, SectionHeading, PullQuote, BulletList, Divider };
