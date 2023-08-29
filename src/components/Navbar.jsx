import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

export default function NavbarDefault() {
  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-1 cursor-pointer py-1.5 font-medium text-green-400"
        >
          DropboxSign
        </Typography>
        <Typography
          as="a"
          href="/"
          className="cursor-pointer py-1.5 font-medium"
        >
          Account
        </Typography>
        <Typography
          as="a"
          href="/"
          className="cursor-pointer py-1.5 font-medium"
        >
          Documents
        </Typography>
        <div className="border-4 border-green-700">
          <Link href="/signup">
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
