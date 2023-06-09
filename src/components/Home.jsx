import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import StepperForm from "./stepperForm";
let Home = () => {
  let navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    } else {
      toast.success(`Welcome ${email}`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  });

  let Logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary shadow-sm">
        <div className="container-fluid">
          Home Page
          <button className="btn btn-light" onClick={() => Logout()}>
            Logout
          </button>
        </div>
      </nav>
      <div className="container-fluid text-center pt-3">
        <h1>Welcome</h1>
      </div>
      <StepperForm />
      <ToastContainer />
    </>
  );
};

export default Home;
