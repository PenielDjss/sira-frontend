import {Button} from "@/components/ui/button";
import {Sun, Moon, ChevronDown} from "lucide-react";
import {Link} from "react-router-dom";
import {useTheme} from "@/providers/theme-provider";
import {useRef, useState} from "react";

const templates = [
    {
        title: "SaaS Launch",
        description: "Landing pages, pricing, and onboarding flows.",
        href: "/templates/saas-launch",
    },
    {
        title: "Developer Docs",
        description: "Documentation sites with search and versioning.",
        href: "/templates/developer-docs",
    },
    {
        title: "Startup Pitch",
        description: "Pitch-ready one-pager with product highlights.",
        href: "/templates/startup-pitch",
    },
    {
        title: "Marketing Hub",
        description: "Campaign pages, lead capture, and blog.",
        href: "/templates/marketing-hub",
    },
];

const docs = [
    {
        title: "Getting Started",
        description: "Install, configure, and launch your first project.",
        href: "/docs/getting-started",
    },
    {
        title: "Components",
        description: "Reusable UI blocks and usage guidelines.",
        href: "/docs/components",
    },
    {
        title: "API Reference",
        description: "Endpoints, auth, and integration examples.",
        href: "/docs/api",
    },
];

const categories = [
    {title: "Backend", href: "/categories/backend"},
    {title: "Frontend", href: "/categories/frontend"},
    {title: "Fullstack", href: "/categories/fullstack"},
    {title: "DevOps", href: "/categories/devops"},
];

type DropdownKey = "templates" | "categories" | "docs" | null;

const Header = () => {
    const {theme, setTheme} = useTheme();
    const [activeMenu, setActiveMenu] = useState<DropdownKey>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleMouseEnter = (menu: DropdownKey) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
    };

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center border-b w-full py-3 px-8 bg-background">
            {/* Logo */}
            <Link to="/">
                <h1 className="text-2xl font-bold">Sira</h1>
            </Link>

            {/* Nav */}
            <nav className="hidden lg:flex items-center gap-1">

                {/* Templates */}
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("templates")}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent">
                        Templates
                        <ChevronDown
                            className={`size-3.5 transition-transform duration-200 ${activeMenu === "templates" ? "rotate-180" : ""}`}
                        />
                    </button>

                    <div
                        className={`absolute top-full left-0 mt-1.5 w-[460px] rounded-xl border bg-popover shadow-xl p-3 transition-all duration-200 origin-top-left
              ${activeMenu === "templates"
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                        }`}
                    >
                        <div className="grid grid-cols-2 gap-1.5 mb-2">
                            {templates.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.href}
                                    className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="font-medium leading-none">{item.title}</span>
                                    <span className="text-muted-foreground text-xs leading-relaxed mt-1">
                    {item.description}
                  </span>
                                </Link>
                            ))}
                        </div>

                        {/* Featured item */}
                        <div className="border-t pt-2 mt-1">
                            <Link
                                to="/templates/ai-studio"
                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <img
                                    src="/vite.svg"
                                    alt="AI Studio"
                                    className="size-9 rounded-md bg-muted p-1.5 shrink-0"
                                    loading="lazy"
                                />
                                <span className="flex flex-col gap-0.5">
                  <span className="font-medium leading-none">AI Studio</span>
                  <span className="text-muted-foreground text-xs leading-relaxed mt-1">
                    Un template complet avec sections dynamiques.
                  </span>
                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Catégories */}
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("categories")}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent">
                        Catégories
                        <ChevronDown
                            className={`size-3.5 transition-transform duration-200 ${activeMenu === "categories" ? "rotate-180" : ""}`}
                        />
                    </button>

                    <div
                        className={`absolute top-full left-0 mt-1.5 w-44 rounded-xl border bg-popover shadow-xl p-1.5 transition-all duration-200 origin-top-left
              ${activeMenu === "categories"
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                        }`}
                    >
                        {categories.map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Docs */}
                <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("docs")}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent">
                        Docs
                        <ChevronDown
                            className={`size-3.5 transition-transform duration-200 ${activeMenu === "docs" ? "rotate-180" : ""}`}
                        />
                    </button>

                    <div
                        className={`absolute top-full left-0 mt-1.5 w-[340px] rounded-xl border bg-popover shadow-xl p-3 transition-all duration-200 origin-top-left
              ${activeMenu === "docs"
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                        }`}
                    >
                        <div className="grid gap-1">
                            {docs.map((item) => (
                                <Link
                                    key={item.title}
                                    to={item.href}
                                    className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="font-medium leading-none">{item.title}</span>
                                    <span className="text-muted-foreground text-xs leading-relaxed mt-1">
                    {item.description}
                  </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing — simple link */}
                <Link
                    to="/pricing"
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-accent"
                >
                    Pricing
                </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="relative rounded-full"
                >
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>

                <Button>Get Started</Button>
            </div>
        </header>
    );
};

export default Header;