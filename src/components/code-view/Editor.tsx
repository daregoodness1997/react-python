import React, { useEffect, useState } from "react";

import Controls from "./Controls";
import { usePython } from "react-py";
import CodeEditor from "./CodeEditor";
import { ArrowPathIcon, PlayIcon, StopIcon } from "@heroicons/react/24/solid";


interface Props{
    input:string;
    setInput:any;
    
}

const Editor:React.FC<Props> =({input, setInput})=> {
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    // setInput();
    setShowOutput(false);
  }, []);

  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    interruptExecution,
  } = usePython();

  function run() {
    runPython(input);
    setShowOutput(true);
    alert("Python running")
  }

  function stop() {
    interruptExecution();
    setShowOutput(false);
  }

  function reset() {
    setShowOutput(false);
    setInput('');
  }

  return (
    <div className="relative mb-10 flex flex-col">
      <Controls
        items={[
          {
            label: "Run",
            icon: PlayIcon,
            onClick: run,
            disabled: isLoading || isRunning,
            hidden: isRunning,
          },
          { label: "Stop", icon: StopIcon, onClick: stop, hidden: !isRunning },
          {
            label: "Reset",
            icon: ArrowPathIcon,
            onClick: reset,
            disabled: isRunning,
          },
        ]}
      />

      <CodeEditor setInput={setInput} input={input} />

      {showOutput && (
        <pre className="mt-4 text-left">
          <code>{stdout}</code>
          <code className="text-red-500">{stderr}</code>
        </pre>
      )}
    </div>
  );
}


export default Editor