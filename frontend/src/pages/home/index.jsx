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
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
};

export default Home;
