import React from "react";
import { useAuth } from "../context/AuthContext"; // Adjust the import path
import { useRouter } from "next/navigation";

function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-500 hover:text-red-700 cursor-pointer rounded-md bg-blue-gray-600 p-2"
    >
      Log Out
    </button>
  );
}

export default LogoutButton;
