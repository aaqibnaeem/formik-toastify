import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { handleChange, clear } from "../config/store/action";

function FormThree(props) {
  let [gender, setGender] = useState("male");
  let [skills, setSkills] = useState("");

  useEffect(() => {
    setGender(localStorage.getItem("gender"));
    setSkills(localStorage.getItem("skills"));
    console.log(props);
  }, []);

  let handleSubmit = () => {
    // if (gender && skills) {
    //   localStorage.clear();
    toast.success("Submit successfull.", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setTimeout(() => {
      props.clear();
      props.nextform();
    }, 500);
    // } else {
    //   toast.error("All fields required.", {
    //     position: "top-right",
    //     autoClose: 500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //   });
    // }
  };

  let handlePrev = () => {
    localStorage.setItem("gender", gender || "");
    localStorage.setItem("skills", skills || "");
    props.prevform();
  };

  let handlechange = (e) => {
    setGender(e.target.value);
    localStorage.setItem("gender", e.target.value);
  };

  return (
    <>
      <div className="container mt-5 bg-light p-5">
        <form className="d-flex align-items-center justify-content-center">
          <FormControl>
            <div className="row d-flex align-items-center align-items-end">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-1">
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="male"
                  name="gender"
                  value={props.values.gender}
                  // onChange={(e) => handlechange(e)}
                  onChange={(e) => props.handleChange(e)}
                >
                  <FormControlLabel
                    // onSelect={(e) => handlechange(e)}
                    onChange={(e) => props.handleChange(e)}
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    // onSelect={(e) => handlechange(e)}
                    onChange={(e) => props.handleChange(e)}
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-1">
                <TextField
                  id="outlined-basic"
                  label="Skills"
                  variant="outlined"
                  type="text"
                  size="small"
                  name="skills"
                  value={props.values.skills}
                  // onChange={(e) => setSkills(e.target.value)}
                  onChange={(e) => props.handleChange(e)}
                />
              </div>
            </div>
          </FormControl>
        </form>
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-5 p-0">
          <Button
            variant="outlined"
            onClick={() => handlePrev()}
            className="my-1"
          >
            Back
          </Button>
          <Button
            variant="outlined"
            onClick={() => handleSubmit()}
            className="my-1"
          >
            Submit & Reset
          </Button>
        </Container>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  values: state,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (data) => dispatch(handleChange(data)),
  clear: clear(),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);
