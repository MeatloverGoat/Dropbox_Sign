import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Router from "next/router";

export default function withProtectedRoute(WrappedComponent) {
  return function ProtectedRoute(props) {
    const { isLoggedIn } = useAuth();

    useEffect(() => {
      if (!isLoggedIn) {
        Router.push("/");
      }
    }, [isLoggedIn]);

    return <WrappedComponent {...props} />;
  };
}
