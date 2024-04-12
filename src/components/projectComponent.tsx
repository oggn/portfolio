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
              <div className={style.projectExplanation}>
                <div className={style.projectPDiv}>
                  <p>
                    모바일과 PC환경을 고려하여 제작된 개인 웹 포트폴리오입니다.
                  </p>
                </div>
                <hr className={style.hrLine} />
                <div className={style.projectExList}>
                  <ul>
                    <li className={style.projectLi}>
                      <span>✔️ 개발인원</span>
                      <span> 1명</span>
                    </li>
                    <li className={style.projectLi}>
                      <span>✔️ Frontend</span>
                      <span> Next, css</span>
                    </li>
                    <li className={style.projectLi}>
                      <span>✔️ Backend</span>
                      <span> vercel</span>
                    </li>
                    <li className={style.projectLi}>
                      <span>✔️ 사이트 주소</span>
                      <span>
                        <a href="https://portfolio-rho-six-70.vercel.app/">
                          click!
                        </a>
                      </span>
                    </li>
                    <li className={style.projectLi}>
                      <span>✔️ github</span>
                      <span>
                        <a href="https://github.com/oggn/portfolio">click!</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
