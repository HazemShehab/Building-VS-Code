import { useSelector } from "react-redux";
import OpenedFileBar from "./OpenedFileBar";
import FileSyntaxHighlighter from "./SVG/FileSyntaxHighlighter";
import { RootState } from "../app/store";

const Preview = () => {
  const {
    clickedFile: {fileContent}
  } = useSelector(({tree}: RootState) => tree)


    return (
        <>
          <OpenedFileBar />
          <FileSyntaxHighlighter content={fileContent} />
        </>
    )
};

export default Preview;