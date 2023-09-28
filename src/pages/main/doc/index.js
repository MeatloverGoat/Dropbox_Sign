import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";

const HelloSignComponent = dynamic(
  () => import("@/components/HelloSignComponent"),
  { ssr: false }
);

const fakeDocuments = [
  {
    id: "doc1",
    title: "Document 1",
    content:
      "This is the content of Document 1. It contains some information about the topic at hand.",
  },
  {
    id: "doc2",
    title: "Document 2",
    content:
      "Here is the content for Document 2. It discusses different aspects of the subject.",
  },
  {
    id: "doc3",
    title: "Document 3",
    content:
      "Document 3's content is here. It dives deep into various facets of the topic.",
  },
];

export default function Docs() {
  const [documentData, setDocumentData] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [signUrl, setSignUrl] = useState(null);

  // Function to fetch signUrl on button click
  const fetchSignUrl = () => {
    console.log("Fetching sign URL...");
    fetch("/api/signurl") // Use the relative path to your API route
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data
        setSignUrl(data.signUrl); // Set the state
      })
      .catch((error) => console.error("Error fetching sign URL:", error));
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetch("http://localhost:3002/data")
      .then((response) => response.json())
      .then((data) => setDocumentData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures this useEffect runs only once

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <ul>
          {fakeDocuments.map((doc) => (
            <li key={doc.id}>
              <a href="#" onClick={() => setSelectedDoc(doc)}>
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
        {selectedDoc && (
          <div className="mt-4 p-4 border border-gray-300">
            <h2>{selectedDoc.title}</h2>
            <p>{selectedDoc.content}</p>
          </div>
        )}
        {documentData && (
          <div className="mt-4 p-4 border border-gray-300">
            <h2>{documentData.title}</h2>
            <p>{documentData.content}</p>
          </div>
        )}
        <button
          onClick={fetchSignUrl}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go sign this document
        </button>

        {signUrl && (
          <HelloSignComponent
            claimUrl={signUrl}
            clientId="e0ceeba6cccdaa89aee90717efe7171c"
          />
        )}
      </div>
    </div>
  );
}
