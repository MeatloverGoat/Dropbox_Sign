import React from "react";
import PDF from "@/components/PDFViewer";
import Sidebar from "@/components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <PDF pdfUrl="http://localhost:3002/Lease.pdf" />
    </div>
  );
}

export default App;
