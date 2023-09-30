import PDFUploadForm from "@/components/PDFUploadForm";
import Sidebar from "@/components/Sidebar";


export default function upload() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="py-10 lg:pl-72">
      <PDFUploadForm/>
      </main>
    </div>
  );
}
