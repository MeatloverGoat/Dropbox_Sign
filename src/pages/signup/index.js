"use client";
import React, { useRef, useState } from "react";
import { Button, Alert, Box, TextField, Typography, Link } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function Signup() {
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(values) {
    try {
      setError("");
      setLoading(true);
      await signup(values.email, values.password);
      router.push("/account");
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <Box p={5}>
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>
            {currentUser && currentUser.email}
            {error && <Alert severity="error">{error}</Alert>}
            <Formik
              initialValues={{ email: "", password: "", passwordConfirm: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    as={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <Field
                    as={TextField}
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Field
                    as={TextField}
                    name="passwordConfirm"
                    type="password"
                    label="Password Confirmation"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    error={
                      touched.passwordConfirm && Boolean(errors.passwordConfirm)
                    }
                    helperText={
                      touched.passwordConfirm && errors.passwordConfirm
                    }
                  />
                  <Button
                    disabled={loading}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    className="bg-blue-500 text-white hover:bg-blue-600 mt-4"
                  >
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <Box p={4} textAlign="center">
            <Typography variant="body1" gutterBottom>
              Already have an account? <Link href="/login">Log In</Link>
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
}
