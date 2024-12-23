import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";
import ContextMenu from "./ui/ContextMenu";
import { useState } from "react";

const OpenedFileBar = () => {
  const { openedFiles } = useSelector((state: RootState) => state.tree)
  const [showMenu, setShowMenu] = useState(false)
  const [menuPosition, setMenuPosition] = useState<{x: number, y: number}>({x: 0, y: 0})

    return (
      <div>
        <div className="flex items-center" 
          onContextMenu={(e) => {
            e.preventDefault();
            setMenuPosition({x: e.clientX, y: e.clientY});
            setShowMenu(true);
          }}>
          {openedFiles.map(file => (
            <OpenedFileBarTab key={file.id} file={file}/>
          ))}
        </div>
        {showMenu && <ContextMenu positions={menuPosition} setShowMenu={setShowMenu}/>}
      </div>
    )
};

export default OpenedFileBar;