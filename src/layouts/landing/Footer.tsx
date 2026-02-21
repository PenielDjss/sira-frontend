import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Heart,
  Code2,
  Mail,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

// Liens principaux par colonne (à adapter selon tes routes)
const footerLinks = {
  product: [
    { label: "Features", to: "/#features" },
    { label: "Documentation", to: "/docs" },
    { label: "API", to: "/docs/api" },
    { label: "Changelog", to: "/changelog" },
    { label: "Status", to: "/status", external: true },
  ],
  resources: [
    { label: "Blog", to: "/blog" },
    { label: "Community", to: "/community" },
    { label: "Support", to: "/support" },
    { label: "Use cases", to: "/use-cases" },
  ],
  company: [
    { label: "About", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Contact", to: "/contact" },
    { label: "Press", to: "/press" },
  ],
  legal: [
    { label: "Privacy", to: "/privacy" },
    { label: "Terms", to: "/terms" },
    { label: "Security", to: "/security" },
  ],
} as const;

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
] as const;

const Footer = () => {
  return (
    <footer className="w-full border-t bg-muted/30">
      {/* ——— Newsletter (style type Google) + zone illustration ——— */}
      <section
        className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-16"
        aria-label="Newsletter"
      >
        <div className="flex flex-1 flex-col gap-4 lg:max-w-xl">
          {/*<div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="size-5" aria-hidden />
            <span className="text-sm font-medium uppercase tracking-wider">
              Newsletter
            </span>
          </div>*/}
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Restez informé des nouveautés Sira
          </h3>
          <p className="text-sm text-muted-foreground">
            Recevez les mises à jour, les bons usages et les annonces dans votre
            boîte mail.
          </p>
          <form
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Prêt pour remplacement par <Input /> shadcn */}
            <Input
              type="email"
              placeholder="votre@email.com"
              aria-label="Adresse email"
              
            />
            <Button type="submit" size="default" className="shrink-0 gap-2">
              S&apos;inscrire
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </form>
        </div>
        {/* Emplacement illustration newsletter — à remplacer par l’asset du designer */}
        <div
          className="relative flex min-h-[180px] flex-1 items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 lg:min-h-[220px]"
          data-illustration="newsletter"
          aria-hidden
        >
          <span className="text-xs text-muted-foreground">
            Illustration newsletter
          </span>
        </div>
      </section>

      <div className="border-t border-border" />

      {/* ——— Grille de liens + Contribute / Sponsor ——— */}
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Colonnes de liens */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <FooterColumn title="Product" links={footerLinks.product} />
              <FooterColumn title="Resources" links={footerLinks.resources} />
              <FooterColumn title="Company" links={footerLinks.company} />
              <FooterColumn title="Legal" links={footerLinks.legal} />
            </div>
          </div>

          {/* Contribute & Sponsor */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-2">
            <p className="text-sm font-medium text-foreground">
              Participez au projet
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="default"
                className="gap-2"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contribuer sur GitHub"
                >
                  <Code2 className="size-4" aria-hidden />
                  Contribute
                </a>
              </Button>
              <Button size="default" className="gap-2" asChild>
                <a
                  href="https://github.com/sponsors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sponsoriser le projet"
                >
                  <Heart className="size-4" aria-hidden />
                  Sponsor
                </a>
              </Button>
            </div>
            {/* Emplacement illustration contribute — à remplacer par l’asset du designer */}
            <div
              className="mt-2 flex min-h-[100px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/30"
              data-illustration="contribute"
              aria-hidden
            >
              <span className="text-xs text-muted-foreground">
                Illustration contribute
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border" />

      {/* ——— Bas de page : logo, réseaux, copyright ——— */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 lg:flex-row lg:px-12">
        <Link
          to="/"
          className="text-xl font-bold text-foreground transition-opacity hover:opacity-80"
        >
          Sira
        </Link>

        <nav className="flex items-center gap-4" aria-label="Réseaux sociaux">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
              aria-label={label}
            >
              <Icon className="size-5" aria-hidden />
            </a>
          ))}
        </nav>

        <p className="text-center text-sm text-muted-foreground lg:text-right">
          © {new Date().getFullYear()} Sira. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; to: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-foreground">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map(({ label, to, external }) => (
          <li key={label}>
            {external ? (
              <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ) : (
              <Link
                to={to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
