import { Button } from "../ui/button";
import { AIButton } from "../ui/AiButton";

export const AiFriendly = () => {
  return (
    <section className="w-full py-8 bg-secondary items-center flex">
      <div className="flex mx-auto max-w-7xl px-6 lg:px-12 w-full gap-4 align-middle">
        <div className="flex flex-col gap-5">
          <h4 className="font-extrabold text-xl">AI-Friendly</h4>
          <div className="flex flex-col">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              reprehenderit suscipit voluptatum aspernatur debitis placeat,
              magni expedita ab qui necessitatibus adipisci nisi architecto a
              vero enim exercitationem doloremque quos molestias! Autem nemo,
              eligendi dolor recusandae cum consequuntur soluta facere facilis.
            </p>
          </div>
          <Button variant={"outline"} className="w-fit">
            En savoir plus
          </Button>
          {/* <AIButton /> */}
        </div>
        <div className="flex border p-2 rounded-xl bg-secondary-foreground aspect-video items-center align-center min-w-70">
          {/* Image pour carrée pour ai friendly du designer */}
        </div>
      </div>
    </section>
  );
};
