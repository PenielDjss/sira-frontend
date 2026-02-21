import { TerminalHero } from "./Terminal";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="flex min-h-[80vh] w-full items-center py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12 xl:gap-16">
          <div className="flex flex-1 flex-col gap-5 text-center lg:max-w-xl lg:text-left">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Crée ton projet
              <br className="hidden sm:block" />
              en une seule commande
            </h1>
            <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base sm:text-lg lg:mx-0">
              Sira est un outil qui te permet de générer ton projet et
              d’installer automatiquement tout ce dont tu as besoin, en une
              seule commande.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center lg:justify-start">
              <Button size="lg">Commencer</Button>
              <Button variant="outline" size="lg">
                Voir la documentation
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-1 justify-center lg:min-w-0">
            <TerminalHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
