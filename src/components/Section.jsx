import facebook from "/src/images/icon-facebook.svg";
import twitter from "/src/images/icon-twitter.svg";
import instagram from "/src/images/icon-instagram.svg";
import youtube from "/src/images/icon-youtube.svg";
import iconUp from "/src/images/icon-up.svg";
import iconDown from "/src/images/icon-down.svg";

const sections = [
  {
    logo: facebook,
    name: "@nathanf",
    followers: 1987,
    title: "followers",
    up: 12,
    color: "bg-Facebook",
  },
  {
    logo: twitter,
    name: "@nathanf",
    followers: 1044,
    title: "followers",
    up: 99,
    color: "bg-Twitter",
  },
  {
    logo: instagram,
    name: "@realnathanf",
    followers: "11k",
    title: "followers",
    up: 1099,
    color: "bg-Linear-Gradient-Instagram",
  },
  {
    logo: youtube,
    name: "@realnathanf",
    followers: 8239,
    title: "subscribers",
    down: 144,
    color: "bg-Youtube",
  },
];

const Section = () => {
  return (
    <div className="flex px-6 lg:flex-row lg:gap-5 lg:px-8 flex-col -mt-14">
      {sections.map((section, index) => (
        <div
          key={index}
          className="dark:bg-Dark-Desatured-Blue-(Card-BG) dark:hover:bg-Dark-Grayish-Blue-(Text) mt-5 bg-Light-Grayish-Blue-(Card-BG) hover:bg-gray-200 w-[100%] transition-all cursor-pointer overflow-hidden rounded-lg m-auto"
        >
          <div className={`${section.color} w-full h-[4px]`}></div>
          <div className="mt-5 flex items-center justify-center py-5">
            <img
              className="block scale-[1.2]"
              src={section.logo}
              alt="icon-facebook"
            />
            <p className="dark:text-Desatured-Blue-(Text) text-Dark-Grayish-Blue-(Text) transition-all font-Inter ml-3 font-bold text-sm">
              @nathanf
            </p>
          </div>
          <p className="dark:text-white text-black font-Inter mt-3 transition-all font-bold text-center text-6xl">
            {section.followers}
          </p>
          <p className="dark:text-Desatured-Blue-(Text) text-Dark-Grayish-Blue-(Text) font-Inter text-[14px] transition-all w-full mt-2 text-center uppercase tracking-[6px]">
            {section.title}
          </p>

          <div className="flex mt-3 mb-3 items-center justify-center py-5">
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
              {section.up ?? section.down} Today
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
