import facebook from "/src/images/icon-facebook.svg";
import twitter from "/src/images/icon-twitter.svg";
import instagram from "/src/images/icon-instagram.svg";
import youtube from "/src/images/icon-youtube.svg";
import iconUp from "/src/images/icon-up.svg";
import iconDown from "/src/images/icon-down.svg";

const sections = [
  {
    logo: facebook,
    title: "Page Views",
    followers: 87,
    up: 3,
  },
  {
    logo: facebook,
    title: "Likes",
    followers: 52,
    down: 2,
  },
  {
    logo: instagram,
    title: "Likes",
    followers: 5462,
    up: 2257,
  },
  {
    logo: instagram,
    title: "Profile Views",
    followers: "52k",
    up: 1375,
  },
  {
    logo: twitter,
    title: "Retweets",
    followers: "117",
    up: 303,
  },
  {
    logo: twitter,
    title: "Likes",
    followers: 507,
    up: 553,
  },
  {
    logo: youtube,
    title: "Likes",
    followers: 107,
    down: 19,
  },
  {
    logo: youtube,
    title: "Total Views",
    followers: 1407,
    down: 12,
  },
];

const Section2 = ({ dark }) => {
  return (
    <div className="lg:flex lg:flex-wrap items-center justify-center gap-5 px-6">
      {sections.map((section, index) => (
        <div
          key={index}
          className="dark:bg-Dark-Desatured-Blue-(Card-BG) dark:hover:bg-Dark-Grayish-Blue-(Text) bg-Light-Grayish-Blue-(Card-BG) hover:bg-gray-200 transition-all lg:w-[285px] w-[100%] mt-5 lg:mt-0 cursor-pointer rounded-lg p-7"
        >
          <div className="flex justify-between items-center">
            <p className="dark:text-Desatured-Blue-(Text) text-Dark-Grayish-Blue-(Text) font-Inter transition-all font-bold text-[15px]">
              {section.title}
            </p>
            <img
              className="block w-max scale-[1.2]"
              src={section.logo}
              alt="icon-facebook"
            />
          </div>

          <div className="flex justify-between items-end">
            <p className="dark:text-white text-black font-Inter mt-6 transition-all font-bold text-3xl">
              {section.followers}
            </p>

            <div className="flex items-center mt-8">
              <img
                className="scale-[1.2]"
                src={section.up ? iconUp : iconDown}
                alt="icon-up"
              />
              <p
                className={`${
                  section.up ? "text-Lime-Green" : "text-Bright-Red"
                } ml-2 font-Inter font-bold text-[14px]`}
              >
                {section.up ?? section.down} %
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2;
