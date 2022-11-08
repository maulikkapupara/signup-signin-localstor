import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  // const getuser = localStorage.getItem("user_login");

  const history = useNavigate();
  //   console.log(getuser);
  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  return (
    <div>
      <p>Welcome you are succesfully login</p>
      <Button onClick={userlogout}>Logout</Button>
    </div>
  );
};

export default Welcome;
