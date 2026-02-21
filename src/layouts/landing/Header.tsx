import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/providers/theme-provider";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center border-b w-full py-3 px-8 bg-background">
      <Link to="/">
        <h1 className="text-2xl font-bold">Sira</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="relative rounded-full"
        >
          {/* Sun */}
          <Sun
            className="
              h-[1.2rem] w-[1.2rem]
              transition-all duration-300
              rotate-0 scale-100
              dark:-rotate-90 dark:scale-0
            "
          />

          {/* Moon */}
          <Moon
            className="
              absolute
              h-[1.2rem] w-[1.2rem]
              transition-all duration-300
              rotate-90 scale-0
              dark:rotate-0 dark:scale-100
            "
          />

          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
