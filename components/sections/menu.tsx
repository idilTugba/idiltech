"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export interface Project {
  name: string | undefined | null;
  link: string;
  projects?: Project[];
}

const Menu = ({
  data,
  listClassName,
}: {
  data: Project[];
  listClassName: string;
}) => {
  const [tab, setTab] = useState<boolean>(false);

  const handleClickLink: React.MouseEventHandler<HTMLElement> | null = () => {
    setTab(!tab);
  };

  return (
    data && (
      <ul className={`${listClassName}`}>
        {data &&
          data.map((item: Project, index: number) => (
            <li
              key={item.name}
              onClick={item.projects ? handleClickLink : undefined}
            >
              <Link
                href={item.link ? item.link : "#"}
                target={item.projects ? "_self" : "_blank"}
                className="no-underline text-[#4b00ff]"
              >
                {item.name}
              </Link>

              {/* If sub menu exist  */}
              {item.projects && (
                <ul
                  className={`${
                    tab && "h-[100%] opacity-100 border-l !py-4 !visible"
                  } invisible h-0 opacity-0 pl-4 bg-[#b6fbc5] sm:bg-none py-0 !mb-0 border-indigo-500 static sm:absolute block sm:inline-block list-inside sm:list-outside transition-all linear delay-100 duration-500 top-15 left-0 sm:left-1/2 lg:left-1/3`}
                >
                  {item.projects.map((subItem: Project) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.link}
                        target="_blank"
                        className="no-underline text-[#4b00ff]"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        <style jsx>{`
          ul {
            margin-bottom: 10px;
            li {
              padding-bottom: 8px;
              &:last-child {
                padding-bottom: 0;
              }
            }
          }
        `}</style>
      </ul>
    )
  );
};

export default Menu;
