import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { handleChange } from "../config/store/action";

function FormTwo(props) {
  useEffect(() => {
    setEducation(localStorage.getItem("education"));
    setGradeOrGpa(localStorage.getItem("gradeOrGpa"));
    console.log(props);
  }, []);

  let [education, setEducation] = useState("");
  let [gradeOrGpa, setGradeOrGpa] = useState("");

  let handleSubmit = () => {
    // if (education && gradeOrGpa) {
    //   localStorage.setItem("education", education);
    //   localStorage.setItem("gradeOrGpa", gradeOrGpa);
    props.nextform();
    // }
    // else {
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
    localStorage.setItem("education", education || "");
    localStorage.setItem("gradeOrGpa", gradeOrGpa || "");
    props.prevform();
  };

  return (
    <>
      <div className="container mt-5 bg-light p-5">
        <form className="d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-md-4">
              <FormControl style={{ width: "200px" }}>
                <InputLabel
                  id="education-select-label"
                  size="small"
                  className="mt-2"
                >
                  Education
                </InputLabel>
                <Select
                  className="my-2 w-100"
                  labelId="education-select-label"
                  id="education-select"
                  value={props.values.education}
                  label="Education"
                  name="education"
                  // onChange={(e) => setEducation(e.target.value)}
                  onChange={(e) => props.handleChange(e)}
                  size="small"
                >
                  <MenuItem value={"Matric"}>Matric</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"University"}>University</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-md-4">
              <TextField
                className="my-2"
                id="outlined-basic"
                label="Grade / GPA"
                variant="outlined"
                type="text"
                size="small"
                name="gradeOrGPA"
                value={props.values.gradeOrGpa}
                // onChange={(e) => setGradeOrGpa(e.target.value)}
                onChange={(e) => props.handleChange(e)}
              />
            </div>
          </div>
        </form>
        <Container className="d-flex justify-content-between align-items-center p-0">
          <Button variant="outlined" onClick={() => handlePrev()}>
            Back
          </Button>
          <Button variant="outlined" onClick={() => handleSubmit()}>
            Next
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
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTwo);
