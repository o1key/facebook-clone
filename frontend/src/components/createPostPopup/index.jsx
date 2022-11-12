import { useState } from "react";
import AddToYourPost from "./AddToYourPost";
import { EmojiPickerBackgrounds } from "./EmojiPickerBackgrounds";
import ImagePreview from "./ImagePreview";
import "./style.css";

export default function CreatePostPopup({ user }) {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [showPrev, setShowPrev] = useState(true);
  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="small_circle">
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
        <AddToYourPost />
        <button className="post_submit">Post</button>
      </div>
    </div>
  );
}
