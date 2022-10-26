import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import CodeVerification from "./CoderVerification";
import SearchAccount from "./SearchAccount";
import SendEmail from "./SendEmail";
import "./style.css";

const Reset = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(4);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = () => {
    Cookies.set("user", "");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <div className="reset">
      <div className="reset_header">
        <img src="../../../icons/facebook.svg" alt="" />
        {user ? (
          <div className="right_reset">
            <Link to="/profile">
              <img src={user.picture} alt="" />
            </Link>
            <button className="blue_btn" onClick={Logout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="right_reset">
            <button className="blue_btn">Login</button>
          </Link>
        )}
      </div>

      <div className="reset_wrap">
        {visible === 0 && (
          <SearchAccount email={email} setEmail={setEmail} error={error} />
        )}
        {visible === 1 && <SendEmail user={user} />}
        {visible === 2 && (
          <CodeVerification
            code={code}
            setCode={setCode}
            error={error}
            user={user}
          />
        )}
        {visible === 4 && (
          <ChangePassword
            error={error}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
      </div>
    </div>
  );
};

export default Reset;
