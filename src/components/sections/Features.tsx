import { LucideBookTemplate, TerminalSquareIcon } from "lucide-react";

export const Features = () => {
  return (
    <section className="w-full min-h-screen items-center flex ">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="flex flex-col px-20 gap-4">
          <h4 className="font-bold pl-2 text-2xl sm:text-3xl lg:text-4xl">
            Features
          </h4>
          <div className="flex w-full  gap-4">
            <div className="flex-1 min-h-[200px] text-primary font-bold border-1 rounded-xl">
              <div className="flex border-b-1 w-full p-2 px-3 items-center gap-2">
                <TerminalSquareIcon />
                Sira CLI
              </div>
            </div>
            <div className="flex-1 min-h-[200px] text-primary font-bold border-1 rounded-xl">
              <div className="flex border-b-1 w-full p-2 px-3 items-center gap-2">
                <LucideBookTemplate size={19} />
                <span>Sira Templates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
