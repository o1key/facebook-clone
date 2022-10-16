export default function Story({ story, className }) {
  return (
    <div className={`story ${className}`}>
      <img src={story.image} alt="" className="story_img" />
      <div className="story_profile_pic">
        <img src={story.profile_picture} alt="" />
      </div>
      <div className="story_profile_name">{story.profile_name}</div>
    </div>
  );
}
