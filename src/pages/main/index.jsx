import Sidebar from "@/components/Sidebar";
import withProtectedRoute from "@/utilities/withProtectedRoute";

function Main() {
  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
}

export default withProtectedRoute(Main);
