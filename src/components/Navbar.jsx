import { useEffect, useState } from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function NavbarDefault() {
  const { isLoggedIn } = useAuth();

  return (
    <Navbar
      className={`w-full max-w-8xl py-2 lg:px-2 lg:py-3 ${
        isLoggedIn ? "hidden" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-1 cursor-pointer py-1.5 font-medium text-blue-500 "
        >
          DropboxSign
        </Typography>
        <Typography
          as="a"
          href="/home"
          className="cursor-pointer py-1.5 font-medium"
        >
          Account
        </Typography>
        <Typography
          as="a"
          href="/home"
          className="cursor-pointer py-1.5 font-medium"
        >
          Documents
        </Typography>
        <Typography
          as="a"
          href="/"
          className="cursor-pointer py-1.5 font-medium"
        >
          Documents
        </Typography>

        <div className="">
          <Link href="/signup" className="mx-2">
            <Button ripple={true} variant="gradient">
              Sign up
            </Button>
          </Link>
          <Link href="/login">
            <Button ripple={true} variant="outlined">
              Log in
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
