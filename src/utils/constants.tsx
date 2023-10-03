import { BsGithub, BsInstagram, BsLinkedin, BsTelephone, BsTwitter } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { RiBriefcaseLine, RiHomeHeartLine, RiMacLine, RiQuestionAnswerLine } from "react-icons/ri";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

export const BLACK_BG = "#000000";
export const WHITE_BG = "#FFFFFF";

// export const BLACK_BG = "rgb(11 17 32/1)";
// export const WHITE_BG = "rgb(248 250 252/1)";
// System Color mode

export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const HOME = "Home";
export const HOME_LINK = "/";
export const RESUME = "Resume";
export const RESUME_LINK = "/resume";
export const GUESTBOOK = "Guestbook";
export const GUESTBOOK_LINK = "/guestbook";
export const PROJECT = "Projects";
export const PROJECT_LINK = "/project";
export const CONTACT_ME = "Contact Me";
export const CONTACT_ME_LINK = "/contactMe";

export const PageLink = [
  { link: HOME, route: HOME_LINK, icon: <RiHomeHeartLine size={20} /> },
  { link: RESUME, route: RESUME_LINK, icon: <RiBriefcaseLine size={20} /> },
  { link: GUESTBOOK, route: GUESTBOOK_LINK, icon: <HiOutlineChatBubbleLeftRight size={20} /> },
  { link: PROJECT, route: PROJECT_LINK, icon: <RiMacLine size={20} /> },
  { link: CONTACT_ME, route: CONTACT_ME_LINK, icon: <RiQuestionAnswerLine size={20} /> },
];

export const App_Ui_Colors = ["brand.100", "#FFD400", "#F9197F", "#7855FF", "#FF7900", "#00BA7C"];

export const articleList = [
  {
    author: "Refactoring Guru",
    title: "The Catalog of Design Patterns",
    firstParagraph:
      "These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.",
    linkUrl: "https://refactoring.guru/design-patterns/catalog",
  },

  {
    author: "Danny Adams",
    title: "Learn TypeScript – The Ultimate Beginners Guide",
    linkUrl: "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/",
    firstParagraph:
      "TypeScript has become increasingly popular over the last few years, and many jobs are now requiring developers to know TypeScript.",
  },

  {
    author: "JavaScript Language",
    title: "Class inheritance",
    firstParagraph:
      "Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing.",
    linkUrl: "https://javascript.info/class-inheritance",
  },
  {
    author: "JavaScript Language",
    title: "Class basic syntax",
    firstParagraph:
      "In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).",
    linkUrl: "https://javascript.info/class",
  },
  {
    author: "JavaScript Language",
    title: "Recursion and stack",
    firstParagraph:
      "Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task. Or, as we’ll see soon, to deal with certain data structures.",
    linkUrl: "https://javascript.info/recursion",
  },
  {
    author: "Chimezie Innocent",
    title: "Understanding React’s useEffect cleanup function",
    linkUrl: "https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/",
    firstParagraph:
      "React’s useEffect cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.",
  },
];

export const easyLinks = [
  {
    title: "Abuja Nigeria",
    icon: <MdLocationPin />,
  },
  {
    title: "Instagram",
    icon: <BsInstagram />,
  },
  {
    title: "Github",
    icon: <BsGithub />,
  },
  {
    title: "LinkedIn",
    icon: <BsLinkedin />,
  },
  {
    title: "Twitter",
    icon: <BsTwitter />,
  },
  {
    title: "09033872114",
    icon: <BsTelephone />,
  },
];
