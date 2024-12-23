import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFilesAction } from "../../app/fetures/fileTreeSlice";
import { RootState } from "../../app/store";

interface Iprops {
  setShowMenu: (val: boolean) => void,
  positions: {
    x: number,
    y: number
  }
}

const ContextMenu = ({positions: {x,y}, setShowMenu} : Iprops) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const {openedFiles, tabIdToRemove}  = useSelector((state: RootState) => state.tree)

  
  //** Handlers
  const onCloseAll = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false)   
  }

  const onClose = () => {
    const filtered = openedFiles.filter(file => file.id !== tabIdToRemove);
    dispatch(setOpenedFilesAction(filtered));
    setShowMenu(false)
  }

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(event.target as Node))
      setShowMenu(false)
    }

    window.addEventListener('click', handleClickOutSide);

    return () => {
      window.removeEventListener('click', handleClickOutSide)
    }
  },[setShowMenu])

    return (
      <div ref={menuRef}>
        <ul 
          className="z-10 w-32 origin-top-right divide-y divide-gray-100
            shadow-lg ring-1 ring-black ring-opacity-5
            bg-white text-black rounded-md focus:outline-none p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            style={{
              position: "absolute",
              left: x,
              top: y
            }}
            >

            <li 
              className="text-gray-700 block px-4 py-2 text-sm cursor-pointer
              hover:bg-gray-300 duration-300 rounded-sm"
                role="menuitem"
                onClick={onClose}>
                  Close
            </li>

            <li 
              className="text-gray-700 block px-4 py-2 text-sm cursor-pointer
              hover:bg-gray-300 duration-300 rounded-sm"
                role="menuitem"
                onClick={onCloseAll}>
                  Close All
            </li>
        </ul>
      </div>
    )
};

export default ContextMenu;

//** useEffect
//** Click Event
//** Menu Ref => useRef => useRef used to know every thing about tht elemnt