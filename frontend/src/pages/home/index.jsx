import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import LeftHome from "../../components/home/left";
import useClickOutside from "../../share/hooks/useClickOutside";

const Home = () => {
  const { user } = useSelector((user) => ({ ...user }));
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
      <LeftHome user={user} />
    </div>
  );
};

export default Home;
