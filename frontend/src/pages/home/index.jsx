import { useSelector } from "react-redux";
import CreatePost from "../../components/craetePost";
import Header from "../../components/header/header";
import LeftHome from "../../components/home/left";
import RightHome from "../../components/home/right";
import SendVerification from "../../components/home/sendVerification";
import Stories from "../../components/home/stories";
import "./style.css";

const Home = ({ setVisible }) => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
        {!user.verified && <SendVerification user={user} />}
        <CreatePost user={user} setVisible={setVisible} />
      </div>
      <RightHome user={user} />
    </div>
  );
};

export default Home;
