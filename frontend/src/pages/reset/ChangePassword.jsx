import { Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../../components/inputs/logininput";
import * as Yup from "yup";
import axios from "axios";

const ChangePassword = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  error,
  setError,
  setLoading,
  userInfo,
}) => {
  const navigate = useNavigate();

  const validatePassword = Yup.object({
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),

    confirmPassword: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  const { email } = userInfo;
  const changePassword = async () => {
    try {
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_BASE_URL}/changePassword`, {
        email,
        password,
      });
      setError("");
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

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
        onSubmit={() => {
          changePassword();
        }}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
            />
            <LoginInput
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              bottom
            />
            {error && <div className="error_text">{error}</div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button type="submit" className="blue_btn">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;
