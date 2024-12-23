import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcons from "./RenderFileIcons";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFileAction, setOpenedFilesAction, setTabIdToRemoveAction } from "../app/fetures/fileTreeSlice";
import { RootState } from "../app/store";

interface Iprops {
    file: IFile
}

const OpenedFileBarTab = ({file} : Iprops) => {
  const dispatch = useDispatch();

  const {openedFiles, clickedFile: {activeTabId}}  = useSelector((state: RootState) => state.tree)

  //** Handlers
  const onClick = () => {
    const {id, name, content} = file
    dispatch(setClickedFileAction({filename: name, fileContent: content, activeTabId: id}))
  }

  const onRemove = (selectedID: string) => {
    const filtered = openedFiles.filter(file => file.id !== selectedID)
    const lastTab = filtered[filtered.length - 1]

    if(!lastTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(setClickedFileAction({activeTabId: null, fileContent: "",filename: ""}))
      return;
    }
    const {id, name, content} = lastTab
    
    dispatch(setOpenedFilesAction(filtered))
    dispatch(setClickedFileAction({activeTabId: id, fileContent: content,filename: name}))
  }

    return (
      <div className={`flex items-center p-2 border-t-2 ${file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"}`}
        onClick={onClick}
        onContextMenu={e => {
          e.preventDefault();
          dispatch(setTabIdToRemoveAction(file.id))
        }}>
        <RenderFileIcons filename={file.name} />
        <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-1 mr-2 p-1 rounded-md">
          {file.name}
        </span>
        <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(file.id);
          }}>
          <CloseIcon/>
        </span>

      </div>
    )
};

export default OpenedFileBarTab;