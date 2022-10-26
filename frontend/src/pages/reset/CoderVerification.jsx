import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../../components/inputs/logininput";
import * as Yup from "yup";

const CodeVerification = ({ user, code, setCode, error }) => {
  const validateCode = Yup.object({
    code: Yup.string()
      .required("Code is required")
      .min("5", "Code must be 5 characters")
      .max("5", "Code must be 5 characters"),
  });

  return (
    <div className="reset_form">
      <div className="reset_form_header">Code verification</div>
      <div className="reset_form_text">
        Please enter code that been send to your email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        validationSchema={validateCode}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder=" Code"
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

export default CodeVerification;
