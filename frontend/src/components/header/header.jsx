import "./style.css";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from "../../svg";
import { useSelector } from "react-redux";
import { SearchMenu } from "./SearchMenu";
import { useState } from "react";
import AllMenu from "./AllMenu";
import { useRef } from "react";
import useClickOutside from "../../share/hooks/useClickOutside";
import UserMenu from "./userMenu";

const color = "#65676b";

const Header = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const [showSearchMenu, setShowSearchMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const allmenu = useRef(null);
  const usermenu = useRef(null);
  useClickOutside(allmenu, () => {
    setShowAllMenu(false);
  });
  useClickOutside(usermenu, () => {
    setShowUserMenu(false);
  });
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div
          className="search search1"
          onClick={() => {
            setShowSearchMenu(true);
          }}
        >
          <Search color={color} />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hide_input"
          />
        </div>
      </div>
      {showSearchMenu && (
        <SearchMenu color={color} setShowSearchMenu={setShowSearchMenu} />
      )}
      <div className="header_middle">
        <Link to="/" className="middle_icon active">
          <HomeActive />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Friends color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Watch color={color} />
          <div className="middle_notification">9+</div>
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Market color={color} />
        </Link>
        <Link to="/" className="middle_icon hover1">
          <Gaming color={color} />
        </Link>
      </div>
      <div className="header_right">
        <div
          className={`circle_icon  hover1 ${showAllMenu && "active_header "}`}
          ref={allmenu}
        >
          <div
            onClick={() => {
              setShowAllMenu((prev) => !prev);
            }}
          >
            <Menu />
          </div>

          {showAllMenu && <AllMenu />}
        </div>
        <div className="circle_icon hover1">
          <Messenger />
        </div>
        <div className="circle_icon hover1">
          <Notifications />
          <div className="right_notification">5</div>
        </div>
        <div
          className={`circle_icon profile hover1${
            showAllMenu && "active_header "
          }`}
          ref={usermenu}
        >
          <div
            onClick={() => {
              setShowUserMenu((prev) => !prev);
            }}
          >
            <img
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={user?.picture}
              alt=""
            />
          </div>

          {showUserMenu && <UserMenu user={user} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
