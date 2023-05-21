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

function FormTwo(props) {
  useEffect(() => {
    setEducation(localStorage.getItem("education"));
    setGradeOrGpa(localStorage.getItem("gradeOrGpa"));
  }, []);

  let [education, setEducation] = useState("");
  let [gradeOrGpa, setGradeOrGpa] = useState("");

  let handleSubmit = () => {
    if (education && gradeOrGpa) {
      localStorage.setItem("education", education);
      localStorage.setItem("gradeOrGpa", gradeOrGpa);
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

  let handlePrev = () => {
    localStorage.setItem("education", education || "");
    localStorage.setItem("gradeOrGpa", gradeOrGpa || "");
    props.prevform();
  };

  return (
    <>
      <div className="container mt-5 bg-light p-5">
        <h3 className="text-center">Form B</h3>
        <form className="d-flex align-items-center justify-content-center">
          <FormControl style={{ width: "200px" }}>
            <InputLabel id="education-select-label">Education</InputLabel>
            <Select
              labelId="education-select-label"
              id="education-select"
              value={education}
              label="Education"
              onChange={(e) => setEducation(e.target.value)}
              size="small"
            >
              <MenuItem value={"Matric"}>Matric</MenuItem>
              <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
              <MenuItem value={"University"}>University</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Grade / GPA"
            variant="outlined"
            type="text"
            size="small"
            name="gradeOrGpa"
            className="m-3"
            value={gradeOrGpa}
            onChange={(e) => setGradeOrGpa(e.target.value)}
          />
          <br />
        </form>
        <Container className="d-flex justify-content-between align-items-center">
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

export default FormTwo;
