import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  paper?: boolean;
  id?: string;
}

const Section = ({ children, className = "", paper = false, id }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${paper ? "section-paper" : "section-white"} ${className}`}>
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
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
}

const SectionHeading = ({ tag, title, subtitle, className = "" }: SectionHeadingProps) => (
  <div className={`mb-10 md:mb-14 ${className}`}>
    {tag && (
      <span className="inline-block mb-3 rounded-full bg-accent/20 px-3 py-1 text-xs font-heading font-bold text-heading uppercase tracking-wider">
        {tag}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight">{title}</h2>
    {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

const PullQuote = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <blockquote className={`pull-quote ${className}`}>{children}</blockquote>
);

const BulletList = ({ items, icon = "→" }: { items: string[]; icon?: string }) => (
  <ul className="bullet-group">
    {items.map((item, i) => (
      <li key={i} className="bullet-item">
        <span className="text-accent font-bold shrink-0 mt-0.5">{icon}</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export { Section, FadeIn, SectionHeading, PullQuote, BulletList };
