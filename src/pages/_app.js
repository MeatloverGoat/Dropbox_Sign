"use client";
import "@/styles/globals.css";
import NavbarDefault from "../components/Navbar";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}
