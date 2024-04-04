"use client";
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

  const smoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 75,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className={style.navDiv}>
        <div className={`${style.navList} ${style.container}`}>
          <ul>
            <li
              className={style.portfolioLogo}
              onClick={() => smoothScroll("summarySection")}
            >
              <div className={style.link}>oggn's portfolio</div>
            </li>
          </ul>
          <ul
            className={style.navArea}
            style={{ minWidth: navTrueFalse ? "200px" : "0" }}
          >
            <li
              id="summary"
              className={style.linkList}
              onClick={() => smoothScroll("summarySection")}
            >
              <div className={style.link}>Home</div>
            </li>
            <li
              id="about"
              className={style.linkList}
              onClick={() => smoothScroll("aboutSection")}
            >
              <div className={style.link}>About</div>
            </li>
            <li
              id="skills"
              className={style.linkList}
              onClick={() => smoothScroll("skillsSection")}
            >
              <div className={style.link}>Skills</div>
            </li>
            <li
              id="project"
              className={style.linkList}
              onClick={() => smoothScroll("projectSection")}
            >
              <div className={style.link}>Project</div>
            </li>
            <li
              id="contact"
              className={style.linkList}
              onClick={() => smoothScroll("contactSection")}
            >
              <div className={style.link}>Contact</div>
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
        </div>
      </nav>
    </>
  );
}
