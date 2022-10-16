import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import useClickOutside from "../../share/hooks/useClickOutside";
import "./style.css";

const Home = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
      </div>
      <RightHome user={user} />
    </div>
  );
};

export default Home;
