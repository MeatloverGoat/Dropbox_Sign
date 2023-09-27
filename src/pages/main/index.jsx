import Sidebar from "@/components/Sidebar";
import withProtectedRoute from "@/utilities/withProtectedRoute";
import { Button } from "@material-tailwind/react";
import dynamic from "next/dynamic";
import Link from "next/link";

function Main() {
  return (
    <div className="flex">
      <Sidebar />
      <Link href="/hello">
        <Button color="blue" className="mx-2 my-2">
          Demo Signing document
        </Button>
      </Link>
    </div>
  );
}

export default withProtectedRoute(Main);
