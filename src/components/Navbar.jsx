import { useLayoutEffect, useState } from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function NavbarDefault() {
  const { isLoggedIn: authIsLoggedIn } = useAuth();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  // Sync state with the context value
  useLayoutEffect(() => {
    setisLoggedIn(authIsLoggedIn);
  }, [authIsLoggedIn]);

  return (
    <Navbar
      className={`w-full max-w-8xl py-2 lg:px-2 lg:py-3 border-none ${
        isLoggedIn ? "hidden" : ""
      }`}
    >
      <div className="border-0 container mx-auto flex justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-1 cursor-pointer py-1.5 font-bold text-blue-500  text-lg align-baseline"
        >
          DropboxSign
        </Typography>
        <Typography
          as="a"
          href="#features"
          className="cursor-pointer py-1.5 font-medium"
        >
          Features
        </Typography>
        <Typography
          as="a"
          href="#testimonials"
          className="cursor-pointer py-1.5 font-medium"
        >
          Testimonials
        </Typography>
        <Typography
          as="a"
          href="#pricing"
          className="cursor-pointer py-1.5 font-medium"
        >
          Pricing
        </Typography>

        <div className="">
          <Link href="/signin">
            <Button ripple={true} variant="gradient">
              Sign in
            </Button>
          </Link>

          <Link href="/register">
            <Button color="blue" className="mx-2">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
