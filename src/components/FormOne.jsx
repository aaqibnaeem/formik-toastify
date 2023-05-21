import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function FormOne(props) {
  let [fullName, setFullName] = useState("");
  let [rollNum, setRollNum] = useState("");

  useEffect(() => {
    setFullName(localStorage.getItem("fullName"));
    setRollNum(localStorage.getItem("rollNum"));
  }, []);

  let submit = () => {
    if (fullName && rollNum) {
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("rollNum", rollNum);
      props.nextform();
    } else {
      toast.error("All fields required.", {
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
  };
  return (
    <>
      <div className="container mt-5 text-center bg-light p-5">
        <h3>Form A</h3>
        <form className="d-flex flex-column align-items-center justify-content-center">
          <TextField
            id="outlined-basic"
            label="Full name"
            variant="outlined"
            type="email"
            size="small"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Roll number"
            variant="outlined"
            type="text"
            size="small"
            value={rollNum}
            onChange={(e) => setRollNum(e.target.value)}
          />
          <br />
          <Button variant="outlined" onClick={() => submit()}>
            Next
          </Button>
        </form>
      </div>
    </>
  );
}

export default FormOne;
