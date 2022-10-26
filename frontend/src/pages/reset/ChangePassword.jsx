import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/logininput";
import * as Yup from "yup";

const ChangePassword = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  error,
}) => {
  const validatePassword = Yup.object({
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be at least 6 characters.")
      .max(36, "Password can't be more than 36 characters"),

    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  return (
    <div className="reset_form" style={{ height: "310px" }}>
      <div className="reset_form_header">Change Password</div>
      <div className="reset_form_text">Pick a strong password</div>
      <Formik
        enableReinitialize
        initialValues={{
          password,
          confirmPassword,
        }}
        validationSchema={validatePassword}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <LoginInput
              type="text"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            {error && <div className="error_text">{error}</div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button className="blue_btn" type="submit">
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
