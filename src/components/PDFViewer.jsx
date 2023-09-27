import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";

function PDF({ pdfUrl }) {
  const [selectedText, setSelectedText] = useState("");

  useEffect(() => {
    // Function to handle messages from the iframe
    const handleMessage = (event) => {
      console.log("Received message:", event.data);
      // Always validate the origin
      if (event.origin !== window.location.origin) return;

      // Check if the received message is of the type 'textSelected'
      if (event.data.type === "textSelected") {
        setSelectedText(event.data.text);
      }
    };

    // Add an event listener to handle messages from the iframe
    window.addEventListener("message", handleMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <Iframe
        src="/pdf-embed"
        width="640px"
        height="740px"
        id="pdf-iframe"
        className=""
        display="block"
        position="relative"
      />
      <div>Selected Text: {selectedText}</div>
    </div>
  );
}

export default PDF;
