import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const SendEmail = ({
  userInfo,
  setUserInfo,
  error,
  setError,
  loading,
  setLoading,
  setVisible,
  email,
}) => {
  const sendEmail = async () => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/sendResetPasswordCode`,
        { email }
      );
      setError("");
      setVisible(2);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="reset_form">
      <div className="reset_form_header">Find Your Password</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form_text">
            How do you want to receive the code to reset your password?
          </div>
          <label htmlFor="email" className="hover1">
            <input type="radio" name="" id="email" checked readOnly />
            <div className="label_col">
              <span>Send Code via email</span>
              <span>{userInfo.email}</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={userInfo?.picture} alt="" />
          <span>{userInfo.email}</span>
          <span>Facebook user</span>
        </div>
      </div>
      {error && <div className="error_text" style={{ padding: "10px" }}></div>}
      <div className="reset_form_btns">
        <Link to="/login" className="gray_btn">
          Cancel
        </Link>
        <button onClick={sendEmail} className="blue_btn" type="submit">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SendEmail;
