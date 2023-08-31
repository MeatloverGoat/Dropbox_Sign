"use client";
import Layout from "../components/Layout";
import "@/styles/globals.css";
import NavbarDefault from "../components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavbarDefault />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
