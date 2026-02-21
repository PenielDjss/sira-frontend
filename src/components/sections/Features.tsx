import { Button } from "../ui/button";

const featureCardContent = {
  title: "Sira CLI",
  description:
    "Sira CLI vous donne des projet AI-Friendly prêts à l'emploi et vous epargne d'installer des dépendances une par une. Des architecture déjà prêtes à l'emploi et des outils open-sources utilsés par des millions de dev",
} as const;

export const Features = () => {
  return (
    <section className="flex w-full min-h-screen items-center py-8 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-6 text-center sm:gap-8">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
            Features
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            <FeatureCard variant="default" />
            <FeatureCard variant="outline" />
            <FeatureCard variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
};

function FeatureCard({
  variant,
}: {
  variant: "default" | "outline";
}) {
  return (
    <div className="flex min-h-0 flex-col items-center gap-3 rounded-2xl border p-4 text-center sm:min-h-[140px] sm:gap-4 sm:p-6">
      <div className="aspect-video w-full shrink-0 rounded-xl border bg-muted/30" />
      <div className="font-bold text-lg sm:text-xl">{featureCardContent.title}</div>
      <p className="text-sm text-muted-foreground sm:text-base">
        {featureCardContent.description}
      </p>
      <Button variant={variant} className="mt-auto w-fit shrink-0">
        En savoir plus
      </Button>
    </div>
  );
}
