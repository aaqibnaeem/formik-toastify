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

function FormThree(props) {
  let [gender, setGender] = useState("male");
  let [skills, setSkills] = useState("");

  useEffect(() => {
    setGender(localStorage.getItem("gender"));
    setSkills(localStorage.getItem("skills"));
  }, []);

  let handleSubmit = () => {
    if(gender && skills){
      localStorage.clear();
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
        props.nextform();
      }, 500);
    }else{
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
    localStorage.setItem("gender", gender || '');
    localStorage.setItem("skills", skills || '');
    props.prevform();
  };

  let handlechange = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
    setGender(e.target.value);
    localStorage.setItem("gender", e.target.value);
  };

  return (
    <>
      <div className="container mt-5 bg-light p-5">
        <h3 className="text-center">Form C</h3>
        <form className="d-flex align-items-center justify-content-center">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="male"
              name="radio-buttons-group"
              value={gender}
              onChange={(e) => handlechange(e)}
            >
              <FormControlLabel
                onSelect={(e) => handlechange(e)}
                value="male"
                control={<Radio />}
                label="Male"
              />

              <FormControlLabel
                onSelect={(e) => handlechange(e)}
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
          <br />
          <TextField
            id="outlined-basic"
            label="Skills"
            variant="outlined"
            type="text"
            size="small"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </form>
        <Container className="d-flex justify-content-between align-items-center mt-5">
          <Button variant="outlined" onClick={() => handlePrev()}>
            Back
          </Button>
          <Button variant="outlined" onClick={() => handleSubmit()}>
            Submit & Reset
          </Button>
        </Container>
      </div>
    </>
  );
}

export default FormThree;
