import { useRef, useState } from "react";
import Header from "../../components/header/header";
import useClickOutside from "../../share/hooks/useClickOutside";

const Home = () => {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
