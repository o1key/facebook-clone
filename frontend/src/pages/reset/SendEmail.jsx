import React from "react";
import { Link } from "react-router-dom";

const SendEmail = ({ user }) => {
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
              <span>email@email.com</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img
            src={
              user?.picture || "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt=""
          />
          <span>email@email.com</span>
          <span>Facebook user</span>
        </div>
      </div>
      <div className="reset_form_btns">
        <Link to="/login" className="gray_btn">
          Cancel
        </Link>
        <button className="blue_btn" type="submit">
          Search
        </button>
      </div>
    </div>
  );
};

export default SendEmail;
