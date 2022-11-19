import { useRef } from "react";
import { useState } from "react";
import { createPost } from "../../functions/post";
import useClickOutside from "../../share/hooks/useClickOutside";
import AddToYourPost from "./AddToYourPost";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";
import ImagePreview from "./ImagePreview";
import PulseLoader from "react-spinners/PulseLoader";
import "./style.css";
import PostError from "./PostError";

export default function CreatePostPopup({ user, setVisible }) {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [showPrev, setShowPrev] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [background, setBackground] = useState("");

  const popup = useRef(null);

  useClickOutside(popup, () => {
    setVisible(false);
  });

  const postSubmit = async () => {
    if (background) {
      setLoading(true);
      console.log(user.token);
      const res = await createPost(background, text, null, user.id, user.token);
      setLoading(false);
      console.log(res, "res");
      if (res === "ok") {
        setBackground("");
        setText("");
        setVisible(false);
      } else {
        setError(res);
      }
    }
  };

  return (
    <div className="blur">
      <div className="postBox" ref={popup}>
        {error && <PostError error={error} setError={setError} />}
        <div className="box_header">
          <div className="small_circle" onClick={() => setVisible(false)}>
            <i
              className="exit_icon"
              style={{
                position: "absolute",
                top: "8px",
              }}
            ></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>

        {!showPrev ? (
          <>
            <EmojiPickerBackgrounds
              text={text}
              user={user}
              setText={setText}
              showPrev={showPrev}
              background={background}
              setBackground={setBackground}
            />
          </>
        ) : (
          <ImagePreview
            text={text}
            user={user}
            setText={setText}
            showPrev={showPrev}
            images={images}
            setImages={setImages}
            setShowPrev={setShowPrev}
          />
        )}
        <AddToYourPost setShowPrev={setShowPrev} />
        <button
          className="post_submit"
          onClick={() => postSubmit()}
          disabled={loading}
        >
          {loading ? <PulseLoader color="#fff" size={5} /> : "Post"}
        </button>
      </div>
    </div>
  );
}
