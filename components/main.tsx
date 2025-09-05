"use client";
import oldProjectsList from "./oldProjects.json";
import Link from "next/link";
import Menu from "./sections/menu";
import { useState, useEffect } from "react";
import PinPonGame from "./pinpongame/index";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Portfolio from "./portfolio";

export default function MainContent() {
  const [tab, setTab] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(
          window.navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    // check on first render
    checkMobile();

    // check every changing of windows width
    window.addEventListener("resize", checkMobile);

    // remove listener when component gone
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  /*** NOTE TO MYSELF
      /*** Do that it can play with mobil touch LATTER  */

  const menuItems = [
    {
      label: "VIDEO PROJECTS",
      content: <Portfolio />,
    },
    {
      label: "WEB PROJECTS",
      content: <Menu data={oldProjectsList} listClassName="old-projects" />,
    },
    {
      label: "PING PONG GAME",
      content: !isMobile ? (
        <PinPonGame />
      ) : (
        <div className="font-bolder text-xl text-white">
          <p className="underline">Need Desktop To Play</p>
          <SentimentDissatisfiedIcon className="text-[#3f9150] !text-9xl !w-auto pl-1/2 mt-6" />
        </div>
      ),
    },
  ];

  return (
    <ul className="main-menu list-none relative max-w-[800px]">
      {menuItems.map((menuItem, index) => (
        <li
          key={index}
          className="main-menu__item flex flex-col justify-items-end	"
        >
          <Link
            href="#"
            className={`${
              index === tab ? "underline" : "no-underline"
            } inline-block max-w-[300px] h-12 text-xl font-tiny text-[#333] transition-all ease-in-out duration-100 hover:text-2xl`}
            onClick={() => {
              setTab(index);
            }}
          >
            {menuItem.label}
          </Link>
          <div className={tab === index ? " " : "hidden"}>
            {" "}
            {/* index active */}
            {menuItem.content}
          </div>
        </li>
      ))}
      <style jsx>{`
        .main-menu {
          &__item {
            // color: #E91E63;
            &:hover {
              // color: #E95584;
            }
          }
        }
      `}</style>
    </ul>
  );
}
