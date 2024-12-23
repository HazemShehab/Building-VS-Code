import IconImg from "./IconImg";
import OpenMenuBar from "./OpenMenuBar";
import LeftArrowNav from "./SVG/LeftArrowNav";
import RightArrowNav from "./SVG/RightArrowNav";
import SearchBar from "./ui/SearchBar";

const NavBar = () => {
  return (
  <>
    <div className="cursor-pointer border-b-2 border-[#ffffff1f]">
      <nav>
        <ul className="flex items-center space-x-2 mt-1 mb-1">
          <li className="ml-2"><IconImg src="/icons/vscode.svg"/></li>
          <li><OpenMenuBar/></li>
          <div className="flex items-center space-x-3">
            <li className="ml-7 hover:bg-slate-800 p-1 rounded-sm"><LeftArrowNav /></li>
            <li className="p-1 rounded-sm text-white/50 cursor-default"><RightArrowNav /></li>
          </div>
          <div>
            <li><SearchBar /></li>
          </div>
        </ul>
      </nav>
    </div>
  </>
  )
};

export default NavBar;