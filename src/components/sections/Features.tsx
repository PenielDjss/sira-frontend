import { Button } from "../ui/button";

export const Features = () => {
  return (
    <section className="w-full min-h-screen items-center flex ">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="flex flex-col px-20 gap-8 text-center">
          <h4 className="font-bold pl-2 text-2xl sm:text-3xl lg:text-4xl">
            Features
          </h4>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-4 p-6 border min-h-140 flex-1 rounded-2xl text-center">
              <div className="border rounded-xl w-full h-full"></div>
              <div className="text-center font-bold text-xl">Sira CLI </div>
              <div>
                Sira CLI vous donne des projet AI-Friendly prêts à l'emploi et
                vous epargne d'installer des dépendances une par une. Des
                architecture déjà prêtes à l'emploi et des outils open-sources
                utilsés par des millions de dev
              </div>
              <Button variant={"outline"} className="w-fit mt-2">
                En savoir plus
              </Button>
            </div>
            <div className="flex flex-col items-center gap-4 p-6 border min-h-140 flex-1 rounded-2xl text-center">
              <div className="border rounded-xl w-full h-full"></div>
              <div className="text-center font-bold text-xl">Sira CLI </div>

              <div>
                Sira CLI vous donne des projet AI-Friendly prêts à l'emploi et
                vous epargne d'installer des dépendances une par une. Des
                architecture déjà prêtes à l'emploi et des outils open-sources
                utilsés par des millions de dev
              </div>
              <Button variant={"outline"} className="w-fit mt-2">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
