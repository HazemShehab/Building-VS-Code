import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/RightArrow";
import BottomArrowIcon from "./SVG/BottomArrow";
import RenderFileIcons from "./RenderFileIcons";
import { useDispatch, useSelector } from "react-redux";
import {  setClickedFileAction, setOpenedFilesAction } from "../app/fetures/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../utils/functions";

interface Iprops {
  fileTree: IFile,
}

const RecurisveComponent = ({ fileTree } : Iprops) => {
  const {id, name, isFolder, children, content} = fileTree;
  const dispatch = useDispatch();
  const {openedFiles} = useSelector((state: RootState) => state.tree)
  const [isOpen, setIsOpen] = useState<boolean>(true);

  //** Handlers
  const toggle = () => setIsOpen(prev => !prev)
  const onFileClickd = () => {
    const exist = doesFileObjectExist(openedFiles, id)
    dispatch(setClickedFileAction({filename: name, fileContent: content, activeTabId: id}))
    if(exist) return
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  }

    return (
      <div className='mb-2 ml-2 cursor-pointer'>
        <div className="flex items-center mb-1.5">
          {isFolder ? (
            <div onClick={toggle} className="flex items-center">
            <span className="mr-2"> {isOpen? <BottomArrowIcon /> : <RightArrowIcon />} </span> 

              {/* <FolderIcon/> */}
              <RenderFileIcons filename={name} isFolder={isFolder} isOpen={isOpen}/>
              <span className="ml-2">{name}</span>
            </div>
          ) : (
            <div className='flex items-center mr-2' onClick={onFileClickd}>
              <RenderFileIcons filename={name}/>
              <span className="ml-2">{name}</span>
            </div>
          )}
        </div>

        {isOpen && children && children.map((file, idx) => (
          <RecurisveComponent fileTree={file} key={idx}/>
        ))}
      </div>
    )
};

export default RecurisveComponent;