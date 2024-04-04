"use client";
import HomeContainer from "@/containers/homeContainer";
import style from "../styles/homeContainer.module.css";
export default function Home() {
  const smoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(section.offsetTop);
      window.scrollTo({
        top: section.offsetTop - 75,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <HomeContainer />
      <div id={style.toTop} onClick={() => smoothScroll("summarySection")}>
        <div className={style.arrowUp}></div>
      </div>
    </>
  );
}
