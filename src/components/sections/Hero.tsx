import { TerminalHero } from "./Terminal";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* TEXT */}
          <div className="flex flex-col flex-1 gap-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              Crée ton projet <br className="hidden sm:block" />
              en une seule commande
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Sira CLI est un outil qui te permet de générer ton projet et
              d’installer automatiquement tout ce dont tu as besoin, en une
              seule commande.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition">
                Commencer
              </button>
              <button className="px-6 py-3 rounded-lg border border-border font-semibold hover:bg-muted transition">
                Voir la documentation
              </button>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="flex-1 w-full flex justify-center">
            <TerminalHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
