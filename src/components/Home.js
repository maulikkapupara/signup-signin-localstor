import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { clear } from "@testing-library/user-event/dist/clear";

const Home = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  //   console.log(inpval);
  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    // console.log(inpval);

    const { name, email, date, password } = inpval;
    console.log(inpval);
    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("plz enter valid email address");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 4) {
      alert("password length greter four");
    } else {
      // swal("Greate!", "You are successfully registered!", "success");
      localStorage.setItem("userregister", JSON.stringify([...data, inpval]));

      setInpval(() => {
        return {
          name: "",
          email: "",
          date: "",
          password: "",
        };
      });
    }
  };
  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="col-lg-6 text-center">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  value={inpval.name}
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  value={inpval.email}
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                <Form.Control name="date"  value={inpval.date} onChange={getdata} type="date" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  value={inpval.password}
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={addData}
                className="mb-3 col-lg-6"
                style={{ background: "rgb(67,185,127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              I have already an account
              <span>
                <NavLink to="/login">SignIn</NavLink>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Home;
