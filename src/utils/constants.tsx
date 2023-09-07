import { RiBriefcaseLine, RiHomeHeartLine, RiMacLine, RiQuestionAnswerLine } from "react-icons/ri";

export const BLACK_BG = "#000000";
export const WHITE_BG = "#FFFFFF";

// export const BLACK_BG = "rgb(11 17 32/1)";
// export const WHITE_BG = "rgb(248 250 252/1)";

// SYstem Color mode

export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const HOME = "Home";
export const HOME_LINK = "/";
export const RESUME = "Resume";
export const RESUME_LINK = "/resume";
export const PROJECT = "Projects";
export const PROJECT_LINK = "/project";
export const CONTACT_ME = "Contact Me";
export const CONTACT_ME_LINK = "/contactMe";

export const PageLink = [
  { link: HOME, route: HOME_LINK, icon: <RiHomeHeartLine size={20} /> },
  { link: RESUME, route: RESUME_LINK, icon: <RiBriefcaseLine size={20} /> },
  { link: PROJECT, route: PROJECT_LINK, icon: <RiMacLine size={20} /> },
  { link: CONTACT_ME, route: CONTACT_ME_LINK, icon: <RiQuestionAnswerLine size={20} /> },
];

export const App_Ui_Colors = ["brand.100", "#FFD400", "#F9197F", "#7855FF", "#FF7900", "#00BA7C"];
