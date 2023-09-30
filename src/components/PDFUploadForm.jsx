"use client";

import { useState } from "react";
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function PDFUploadForm() {
  const [file, setFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [selection, setSelection] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function fileValueHandler(e) {
    setErrorMsg("");
    const inputFile = e.target.files[0];

    if (inputFile.type === "application/pdf") {
      setFile(e.target.files[0]);
      console.log(file);
    } else {
      setErrorMsg("Only accept PDF file");
      setFile(null);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!file) {
      setErrorMsg("Please choose a PDF file");
      return;
    }
    setErrorMsg("");

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setPdfFile(e.target.result);
    };
  }
  
  const getSelectionHandler = () => {
    const selection = window.getSelection();
    setSelection(selection.toString())
    console.log("Got selection", selection.toString());
  };

  return (
    <div>
      <form onSubmit={submitHandler}>

        <label
          for="formFile"
          class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
        >
          file input
        </label>
        <input
          class=" m-3"
          type="file"
          onChange={fileValueHandler}
          required
        />

        <button type="submit" class="btn">
          submit
        </button>

        <div>{errorMsg}</div>

      </form>

      {pdfFile &&(<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
          }}
        >
          <Viewer fileUrl={pdfFile} />
        </div>
      </Worker>)}
      <div>
        <button onClick={getSelectionHandler}>Select</button>
      </div>
      <div>
        <p>Selected text:</p>
        <div>
          {selection}
        </div>
      </div>
    </div>
  );
}
