import MenuItem from "./MenuItem";

export const menu = [
  {
    name: "Campus",
    icon: "campus",
    description: "A unique, exclusive space for college students on Facebook.",
  },
  {
    name: "Events",
    icon: "events",
    description:
      "Organize or find events and other things to do online and nearby.",
  },
  {
    name: "Find Friends",
    icon: "friends",
    description: "Search for friends or people you may know.",
  },
  {
    name: "Groups",
    icon: "groups",
    description: "Connect with people who share your interests.",
  },
  {
    name: "News Feed",
    icon: "feed",
    description: "See relevant posts from people and Pages you follow.",
  },
  {
    name: "Pages",
    icon: "pages",
    description: "Discover and connect with businesses on Facebook.",
  },
  {
    name: "Gaming Video",
    icon: "gaming",
    description: "Watch and connect with your favorite games and streamers.",
  },
  {
    name: "Play Games",
    icon: "play",
    description: "Play your favorite games.",
  },
  {
    name: "Watch",
    icon: "watch",
    description:
      "A video destination personalized to your interests and connections.",
  },
  {
    name: "Facebook Pay",
    icon: "pay",
    description: "A seamless, secure way to pay on the apps you already use.",
  },
  {
    name: "Marketplace",
    icon: "marketplace",
    description: "Buy and sell in your community.",
  },
  {
    name: "Recent Ad Activity",
    icon: "recent",
    description: "See all the ads you interacted with on Facebook.",
  },
  {
    name: "Memories",
    icon: "memories",
    description: "Browse your old photos, videos and posts on Facebook.",
  },
  {
    name: "Saved",
    icon: "saved",
    description: "Find posts, photos and videos that you saved for later.",
  },
  {
    name: "Weather",
    icon: "weather",
    description:
      "Check your local forecast and sign up for daily weather notifications.",
  },
  {
    name: "Ads",
    icon: "ads",
    description: "Create, manage and track the performance of your ads.",
  },
  {
    name: "Jobs",
    icon: "jobs",
    description: "Find a job that's right for you.",
  },
  {
    name: "Climate science center",
    icon: "climate",
    description: "Learn about climate change and its effects.",
  },
  {
    name: "COVID-19 Information Center",
    icon: "covid",
    description:
      "See the latest prevention tips, community resources and updates from health organizations.",
  },
  {
    name: "Community Help",
    icon: "community",
    description:
      "Get involved in your community by creating a drive, requesting or offering help or volunteering.",
  },
  {
    name: "Fundraisers",
    icon: "fundraisers",
    description: "Donate and raise money for nonprofits and personal causes.",
  },
  {
    name: "Messenger",
    icon: "messenger",
    description: "Chat instantly with your friends and connections.",
  },
  {
    name: "Messenger Kids",
    icon: "messkids",
    description: "Let kids message with close friends and family.",
  },
];
export const create = [
  {
    name: "Post",
    icon: "m_post_icon",
  },
  {
    name: "Story",
    icon: "m_story_icon",
  },
  {
    name: "Room",
    icon: "m_room_icon",
  },
  {
    name: "Page",
    icon: "m_page_icon",
  },

  {
    name: "Ad",
    icon: "m_ad_icon",
  },
  {
    name: "Group",
    icon: "m_group_icon",
  },
  {
    name: "Event",
    icon: "m_event_icon",
  },
  {
    name: "Marketplace Listing",
    icon: "m_post_mar",
  },
  {
    name: "Job",
    icon: "m_post_job",
  },
];

const AllMenu = () => {
  return (
    <div className="all_menu">
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="all_left">
          <div className="all_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Search Menu" />
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Social</div>
            {menu.slice(0, 6).map((item, i) => (
              <MenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Entertainment</div>
            {menu.slice(6, 9).map((item, i) => (
              <MenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Shopping</div>
            {menu.slice(9, 11).map((item, i) => (
              <MenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Personal</div>
            {menu.slice(11, 15).map((item, i) => (
              <MenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Professional</div>
            {menu.slice(15, 17).map((item, i) => (
              <MenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Community Resources</div>
            {menu.slice(17, 21).map((item, i) => (
              <MenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">More from Meta</div>
            {menu.slice(21, 23).map((item, i) => (
              <MenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="all_right">
          <div className="all_right_header">Create</div>
          {create.map((item, i) => (
            <div key={i} className="all_right_item hover1">
              <div className="all_right_circle">
                <i className={item.icon}></i>
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
