import style from "../styles/homeContainer.module.css";
import Image from "next/image";
export default function ProjectComponent() {
  return (
    <>
      <section id="projectSection" className={style.project}>
        <div>
          <div className={style.gamtan}>PROJECT</div>
        </div>
        <div className={`${style.projectBoxArea} ${style.container}`}>
          <div className={style.projectBox}>
            <div className={style.projectTitle}>
              <h1 className={`${style.projectName}`}>oggn's portfolio</h1>
              <h1 className={`${style.projectAt}`}>24.04.01~24.04.04</h1>
            </div>
            <div className={style.projectContent}>
              <div className={style.projectImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.projectImg}
                  src={"/img/web-portfolio.png"}
                  alt="web-portfolio"
                />
              </div>
            </div>
          </div>
          <div className={style.projectBox}>
            <div className={style.projectTitle}>
              <h1 className={`${style.projectName}`}>web portfolio</h1>
              <h1 className={`${style.projectAt}`}>24.04.01~24.04.04</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
