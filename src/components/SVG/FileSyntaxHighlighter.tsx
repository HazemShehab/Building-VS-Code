import  SyntaxHighlighter  from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Iprops {
  content: string | undefined
}

const FileSyntaxHighlighter = ({content} : Iprops) => {
    return (
      <SyntaxHighlighter language="javascript" style={atomOneDark}
        customStyle={{
          background: "transparent",
          width: "100%",
          maxHeight: "100hv",
          overflowX: "auto",
          fontSize: "1.5rem"
        }}
        showLineNumbers
        >
        {String(content)}
      </SyntaxHighlighter>
    )
};

export default FileSyntaxHighlighter;
