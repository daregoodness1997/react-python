import React from 'react'
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

interface Props{
    setInput:any;
    input:string;
}

const CodeEditor: React.FC<Props> = ({ setInput, input }) => {
  function onChange(newValue: any) {
    console.log("change", newValue);
    setInput(newValue);
  }
  return (
    <AceEditor
      mode="python"
      theme="monokai"
      onChange={onChange}
      value={input}
      name="code-editor"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default CodeEditor