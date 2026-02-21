import { Features } from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Features />
    </div>
  );
};

export default HomePage;
