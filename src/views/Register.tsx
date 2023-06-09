import React, { useState } from "react";
import LoginAccount from "../components/auth/LoginAccount";
import { Link } from "react-router-dom";
import LoginSMS from "../components/auth/LoginSMS";
import RegisterForm from "../components/auth/RegisterForm";
import "../styles/auth.css";

const Register = () => {
  const [sms, setSms] = useState(false);

  return (
    <div className="auth_page">
      <div className="auth_box">
        <h3 className="text-uppercase text-center mb-4">Register</h3>
        <RegisterForm />
        <p>
          Already have an account ?
          <Link to={`/login`} style={{ color: "crimson" }}>
            {` Login Now`}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
