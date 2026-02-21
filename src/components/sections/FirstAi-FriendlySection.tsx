import { Button } from "../ui/button";

export const AiFriendly = () => {
  return (
    <section className="flex w-full items-center py-8 sm:py-10 lg:py-12 bg-secondary">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 sm:gap-8 md:flex-row md:items-center md:gap-10 lg:px-12 lg:gap-12">
        <div className="flex flex-1 flex-col gap-4 sm:gap-5 md:min-w-0">
          <h2 className="font-extrabold text-lg sm:text-xl lg:text-2xl">
            AI-Friendly
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            reprehenderit suscipit voluptatum aspernatur debitis placeat, magni
            expedita ab qui necessitatibus adipisci nisi architecto a vero enim
            exercitationem doloremque quos molestias! Autem nemo, eligendi dolor
            recusandae cum consequuntur soluta facere facilis.
          </p>
          <Button variant="outline" className="w-fit">
            En savoir plus
          </Button>
          {/* <AIButton /> */}
        </div>
        <div
          className="flex w-full min-w-0 shrink-0 items-center justify-center rounded-xl border bg-secondary-foreground p-2 aspect-video md:max-w-md lg:max-w-lg lg:flex-1"
          data-illustration="ai-friendly"
        >
          {/* Image pour carrée pour ai friendly du designer */}
        </div>
      </div>
    </section>
  );
};
