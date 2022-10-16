import { ArrowRight, Plus } from "../../../svg";
import "./style.css";
import Story from "./Story";
import { stories } from "../../../data/Home";
import { useEffect, useState } from "react";
export default function Stories() {
  const [data, setData] = useState(stories);
  const [index, setIndex] = useState(0);
  console.log(index);
  useEffect(() => {
    let lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  return (
    <div className="stories">
      <div className="create_story_card">
        <img
          src="../../../images/default_pic.png"
          alt=""
          className="create_story_img"
        />
        <div className="plus_story">
          <Plus color="#fff" />
        </div>
        <div className="story_create_text">Create Story</div>
      </div>
      {stories.map((story, personIndex) => {
        let position = "nextSlide";
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === data.length - 1)
        ) {
          position = "lastSlide";
        }
        return <Story key={story.id} story={story} className={position} />;
      })}
      <div className="white_circle" onClick={() => setIndex(index + 1)}>
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
}
