import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-1 border-gray-200 w-full py-3 px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <h1 className="text-2xl font-bold">Sira</h1>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="hover:none border-none rounded-full" size="icon">
            <Sun />
        </Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
