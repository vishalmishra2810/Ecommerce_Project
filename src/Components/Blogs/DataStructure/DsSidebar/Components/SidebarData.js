import React from "react";
import HomeIcon from "@material-ui/icons/Home";
// import MailIcon from "@material-ui/icons/Mail";
import {
  Book,
  CompassCalibration,
  Contacts,
  Help,
  Note,
  Subject,
  Visibility,
} from "@material-ui/icons";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Book Recommendation",
    icon: <Book />,
    link: "/BooksRecommendation",
  },
  {
    title: "Visualisations",
    icon: <Visibility />,
    link: "/Visualisations",
  },
  {
    title: "CS Subjects",
    icon: <Subject />,
    link: "/Cs_Section",
  },
  {
    title: "Resume Builder",
    icon: <Note />,
    link: "/Resume_Builder",
  },
  {
    title: "Online Compiler",
    icon: <CompassCalibration />,
    link: "/Compiler",
  },
  {
    title: "Any Suggestion",
    icon: <Help />,
    link: "/Suggestion",
  },
  {
    title: "Contact Us",
    icon: <Contacts />,
    link: "/Contact",
  },
];
