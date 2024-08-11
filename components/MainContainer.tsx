import React from 'react';
import cl from "../pages/style.module.css";
import Head from "next/head";
import { useSelector } from "react-redux";
import { LocalizationData } from "../localization";
import AddHomeIcon from "@mui/icons-material/AddHome";
import NavigateLink from "./NavigateLink";
import { IMainContainer } from '../types/generalType';


const MainContainer: React.FC<IMainContainer> = ({ children, keywords }) => {
  const st = useSelector((state) => console.log("this is state", state));

  return (
    <>
      <Head>
        <meta name="keywords" content={"next_js " + keywords} />
        <title>Main PAGE</title>
      </Head>
      <div className={cl.navbar}>
        <NavigateLink href="/" text="home">
          <AddHomeIcon style={{ color: "white", marginTop: "10px" }} />
        </NavigateLink>

        <NavigateLink href={"/"} text={LocalizationData.title} />
        <NavigateLink href={"/users"} text={LocalizationData.textUsers} />
        <NavigateLink
          href={"/test-calendar"}
          text={LocalizationData.textCalendar}
        />

        <NavigateLink href={"/pictures"} text={LocalizationData.textPictures} />
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
