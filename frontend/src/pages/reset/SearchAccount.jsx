import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/logininput";
import * as Yup from "yup";

const SearchAccount = ({ email, setEmail, error }) => {
  const validateEmail = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("Must be a valid email address")
      .max(50, "Email add can't more than 50 characters"),
  });

  return (
    <div className="reset_form">
      <div className="reset_form_header">Find Your Account</div>
      <div className="reset_form_text">
        Please enter your emial address or mobile number to search for your
        account.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          email,
        }}
        validationSchema={validateEmail}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address or phone number"
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

export default SearchAccount;
