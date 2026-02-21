import { Features } from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import { AiFriendly } from "@/components/sections/FirstAi-FriendlySection";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <AiFriendly />
      <Features />
    </div>
  );
};

export default HomePage;
