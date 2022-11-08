import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_img from "./Sign_img";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  // const [data, setData] = useState([]);
  //   console.log(inpval);
  const getdata = (e) => {
    // console.log(e.target.value);
    const { value, name } = e.target;
    // console.log(value,name);

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

    const getuserArr = localStorage.getItem("userregister");
    // console.log(getuserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("plz enter valid email address");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 4) {
      alert("password length greter four");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((e, indx) => {
          return e.email === email && e.password === password;
        });
        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          // console.log("user login succesfuly");
          localStorage.setItem("user_login", JSON.stringify(getuserArr));
          history("/welcome");
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-5">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="col-lg-6 text-center">Sign In </h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
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
              I have already an account{" "}
              <span>
                <NavLink to="/">SignIn</NavLink>
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Login;
