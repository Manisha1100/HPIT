import logo from "../../assets/img/logo.svg";
import { Search, Globe, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-black px-10 py-5">
      <div className="flex items-center justify-between">

        <img src={logo} alt="Company logo" className="h-10" />

        <nav>
          <ul className="flex gap-8 text-white font-custom">
            <li className="cursor-pointer hover:text-gray-300">Company</li>
            <li className="cursor-pointer hover:text-gray-300">Capabilities</li>
            <li className="cursor-pointer hover:text-gray-300">Industries</li>
            <li className="cursor-pointer hover:text-gray-300">Insight</li>
            <li className="cursor-pointer hover:text-gray-300">Career</li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300">
            <Search className="text-white w-5 h-5" />
          </button>
          <button className="hover:text-gray-300">
            <Globe className="text-white w-5 h-5" />
          </button>
          <button className="hover:text-gray-300">
            <Menu className="text-white w-6 h-6" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
