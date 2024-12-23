import { extentionIconPath } from "../constant";
import IconImg from "./IconImg";
import FileIcon from "./SVG/File";

interface Iprops {
    filename: string,
    isFolder?: boolean,
    isOpen?: boolean
}

// Record is responsible to validate key value paris inside the object

const RenderFileIcons = ({filename, isFolder, isOpen} : Iprops) => {
    //We have used pop to get the last item of the arr after
    //spliting the word by split function
    const extention = filename.split('.').pop()

    if(extention && Object.prototype.hasOwnProperty.call(extentionIconPath, extention)) {
        const iconPath = isFolder ? isOpen ?  
            `${extentionIconPath[extention]}_opened.svg` 
          : `${extentionIconPath[extention]}.svg` 
          : `${extentionIconPath[extention]}.svg`

        return <IconImg src={iconPath} />
    }

    // if(extention === "tsx") return <IconImg src="" />
    // if(extention === "js") return <IconImg src="" />
    // if(extention === "jsx") return <IconImg src="" />
    // if(extention === "html") return <IconImg src="" />

    // //** Folders
    // if(extention === "node_modules" || extention === "Public" || extention === "src" || extention === "components" || 
    //     extention === "vite"
    // ) 
    // return isFolder && isOpen? (
    //     <IconImg src="/icons/default_folder_opened.svg" className="w-7 h-7"/> 
    // ): (
    //     <IconImg src="/icons/default_folder.svg" className="w-7 h-7"/> 
    // )

    if(isFolder && isOpen) return <IconImg src="/icons/default_folder_opened.svg" className="w-7 h-7"/>
    if(isFolder && !isOpen) return <IconImg src="/icons/default_folder.svg" className="w-7 h-7"/>

    return <FileIcon />
};

export default RenderFileIcons;