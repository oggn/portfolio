"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "../styles/navContainer.module.css";

export default function NavContainer() {
  const [navTrueFalse, setNavTrueFalse] = useState(false);
  const navOpen = () => {
    setNavTrueFalse(!navTrueFalse);
  };

  useEffect(() => {
    const hamburger = document.querySelectorAll(".hamburgerSpan");
    hamburger.forEach((span) => {
      if (navTrueFalse) {
        span.classList.add("active");
      } else {
        span.classList.remove("active");
      }
    });
  }, [navTrueFalse]);

  return (
    <>
      <nav className={style.navDiv}>
        <ul>
          <li className={style.portfolioLogo}>
            <Link className={style.link} href="/">
              oggn's portfolio
            </Link>
          </li>
        </ul>
        <ul
          className={style.navArea}
          style={{ minWidth: navTrueFalse ? "200px" : "0" }}
        >
          <li className={style.linkList}>
            <Link className={style.link} href="/">
              Home
            </Link>
          </li>
          <li className={style.linkList}>
            <Link className={style.link} href="/about">
              About
            </Link>
          </li>
          <li className={style.linkList}>
            <Link className={style.link} href="/skills">
              Skills
            </Link>
          </li>
          <li className={style.linkList}>
            <Link className={style.link} href="/project">
              Project
            </Link>
          </li>
          <li className={style.linkList}>
            <Link className={style.link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div className={style.hamburgerDiv} onClick={navOpen}>
          <div className={style.hamburger}>
            <span
              className={`${style.hamburgerSpan} ${
                navTrueFalse ? style.active : ""
              }`}
            ></span>
            <span
              className={`${style.hamburgerSpan} ${
                navTrueFalse ? style.active : ""
              }`}
            ></span>
            <span
              className={`${style.hamburgerSpan} ${
                navTrueFalse ? style.active : ""
              }`}
            ></span>
            <span
              className={`${style.hamburgerSpan} ${
                navTrueFalse ? style.active : ""
              }`}
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
}
