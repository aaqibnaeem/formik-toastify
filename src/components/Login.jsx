import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from 'react-router-dom'

let Login = () => {
    const navigate = useNavigate()
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const notify = toast.success("Logged in, Please wait...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem('isLoggedIn',true)
      localStorage.setItem('email',values.email)
      setTimeout(() => {
        navigate('/Home',{replace:true})
      }, 2000);
    },
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h1 className="mb-4">Login</h1>
        <form onSubmit={myFormik.handleSubmit}>
          <input
            style={{ minWidth: "300px" }}
            className="form-control shadow-none"
            id="email"
            label="Email"
            placeholder="Email"
            value={myFormik.values.email}
            onChange={myFormik.handleChange}
          />

          {myFormik.touched.email && Boolean(myFormik.errors.email) ? (
            <span
              style={{
                color: "red",
                fontSize:"12px"
              }}
            >
              {myFormik.touched.email && myFormik.errors.email}
            </span>
          ) : null}

          <br />
          <input
            className="form-control shadow-none"
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            value={myFormik.values.password}
            onChange={myFormik.handleChange}
          />
          {myFormik.touched.password && Boolean(myFormik.errors.password) ? (
            <span
              style={{
                color: "red",
                fontSize:"12px"
              }}
            >
              {myFormik.touched.password && myFormik.errors.password}
            </span>
          ) : null}
          <br />

          <button className="btn btn-success w-100" type="submit">
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
