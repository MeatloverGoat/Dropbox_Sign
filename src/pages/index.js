import { useState, useEffect } from "react";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sign with confidence, powered by Dropbox.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Effortlessly sign and manage documents using our web app,
              seamlessly integrated with Dropbox's robust cloud storage and
              collaboration features.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/signup"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Explore
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
