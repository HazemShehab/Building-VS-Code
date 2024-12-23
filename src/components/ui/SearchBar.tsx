import { useEffect, useRef, useState } from "react";
import SearchMenuBar from "../SearchMenuBar";
import { fileTree } from "../../data/fileTree";


const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const heightSearch = () => fileTree.children && fileTree.children


  //** Handlers
  const onClick = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(event.target as Node))
        setIsOpen(false)
    }

    window.addEventListener('click', handleClickOutSide);

    return () => {
      window.removeEventListener('click', handleClickOutSide)
    }
  },[setIsOpen])

    return (
      <div ref={menuRef}>
        <form className="w-[450px] ml-3" onClick={()=>setIsOpen(true)}>   
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="default-search" 
              className="cursor-pointer text-center block w-full p-1 pr-5 ps-10 text-sm text-gray-900 rounded-lg
             bg-gray-800 focus: outline-none hover:bg-gray-700" 
              placeholder="Building-Vs Code [Administrator]" required />
          </div>
        </form>
        <div>
          {isOpen &&
          <div className='w-[450px] absolute left-[480px] top-0 border border-[#64646473] rounded-md bg-[#1f1e1efa]' 
            onClick={onClick} style={{
              height: `${heightSearch()}`
            }}>
            <div>
              <input placeholder="Search files by name" type="defaulf search" 
                    className="p-0.5 mt-2 ml-1.5 w-[97%] rounded-sm focus: outline-none bg-[#383737fa]"
                    autoFocus></input>
            </div>
            <SearchMenuBar fileTree={fileTree}/>
          </div>
        }
        </div>
      </div>
      )
};
export default SearchBar;