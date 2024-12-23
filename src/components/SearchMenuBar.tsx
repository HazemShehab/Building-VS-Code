import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import { doesFileObjectExist } from "../utils/functions";
import RenderFileIcons from "./RenderFileIcons";
import { RootState } from "../app/store";
import { setClickedFileAction, setOpenedFilesAction } from "../app/fetures/fileTreeSlice";

interface Iprops {
  fileTree: IFile,
}

const SearchMenuBar = ({fileTree} : Iprops) => {
  const {children, isFolder, name, id, content} = fileTree;
  const {openedFiles} = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();

  //** Handlers
  const onFileClickd = () => {
    const exist = doesFileObjectExist(openedFiles, id)
    dispatch(setClickedFileAction({filename: name, fileContent: content, activeTabId: id}))
    if(exist) return
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  }
  
    return (
      <div className='cursor-pointer'>
        <div className="items-center mb-1.5">
          {isFolder ? "" : (
            <div className='items-center mr-2' onClick={onFileClickd}>
              <ul className="flex ml-2">
                <li className="flex items-center mt-1"><RenderFileIcons filename={name}/></li>
                <li className="flex items-center mt-1"><span className="ml-2">{name}</span></li>
              </ul>
            </div>
           )}
         {
          children && children.map((file,idx) => (
            <div key={idx}>
              <span><SearchMenuBar fileTree={file}/></span>
            </div>
          ))}
        </div>
      </div>
)};

export default SearchMenuBar;