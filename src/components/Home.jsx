import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
  }, []);

  let Logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("isLoggedIn");
    navigate("/", { replace: true });
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Home Page
          </a>
          <button className="btn btn-secondary" onClick={() => Logout()}>
            Logout
          </button>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Home;
