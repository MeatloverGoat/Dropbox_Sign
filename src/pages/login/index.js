"use client";
import React, { useRef, useState } from "react";
import { TextField, Button, Alert } from "@mui/material"; // Import Material-UI components
import GoogleButton from "react-google-button";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login, googleLogin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      setError("");
      setLoading(true);
      await googleLogin();
      router.push("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-5 box max-w-md bg-white rounded shadow-lg">
          <h2 className="mb-3 text-center">Login</h2>
          {currentUser && currentUser.email}

          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
              className="mb-3 w-full"
              label="Email Address"
              type="email"
              inputRef={emailRef}
              required
            />
            <TextField
              className="mb-3 w-full"
              label="Password"
              type="password"
              inputRef={passwordRef}
              required
            />
            <div className="mt-4">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Login
              </Button>
            </div>
          </form>
          <hr className="my-4" />
          <div className="text-center">
            <div className="inline-block">
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleLogin}
              />
            </div>
          </div>
          <div className="p-4 mt-4 text-center">
            <p className="mt-3">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
