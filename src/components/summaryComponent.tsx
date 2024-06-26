"use client";
import style from "../styles/homeContainer.module.css";
export default function SummaryComponent() {
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
      <section id="summarySection" className={style.summary}>
        <div>
          <div className={style.introBox}>- 김창권의 포트폴리오 -</div>
        </div>
        <div className={style.intro}>
          <p>안녕하세요:) 웹 개발자를 꿈꾸고 있는 김창권이라고 합니다.</p>
          <p>지금 현재에 만족하지 않고 앞으로 나아가고 싶습니다.</p>
          <p>주어진 업무에 포기하지 않고 최선을 다 하겠습니다.</p>
        </div>
        <button
          id="seeMore"
          className={style.btnKnow}
          onClick={() => smoothScroll("aboutSection")}
        >
          더 알아보기
        </button>
      </section>
    </>
  );
}
