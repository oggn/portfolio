import style from "../styles/homeContainer.module.css";
import Image from "next/image";
import { projects } from "../constants/projects";
export default function ProjectComponent() {
  return (
    <>
      <section id="projectSection" className={style.project}>
        <div>
          <div className={style.gamtan}>PROJECT</div>
        </div>
        <div className={`${style.projectBoxArea} ${style.container}`}>
          {/* 여기서부터는 반복문 사용하기 */}
          {projects.map((project: any) => {
            return (
              <div className={style.projectBox}>
                <div className={style.projectTitle}>
                  <h1 className={`${style.projectName}`}>{project.pTitle}</h1>
                  <h1 className={`${style.projectAt}`}>{project.pPeriod}</h1>
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
                      <p>{project.pDescription}</p>
                    </div>
                    <hr className={style.hrLine} />
                    <div className={style.projectExList}>
                      <ul>
                        <li className={style.projectLi}>
                          <span>✔️ 개발인원</span>
                          <span> {project.pDevelopers}명</span>
                        </li>
                        <li className={style.projectLi}>
                          <span>✔️ Frontend</span>
                          <span> {project.pFront}</span>
                        </li>
                        <li className={style.projectLi}>
                          <span>✔️ Backend</span>
                          <span> {project.pBack}</span>
                        </li>
                        <li className={style.projectLi}>
                          <span>✔️ 사이트 주소</span>
                          <span>
                            <a target="_blank" href={project.pSiteUrl}>
                              click!
                            </a>
                          </span>
                        </li>
                        <li className={style.projectLi}>
                          <span>✔️ github</span>
                          <span>
                            <a target="_blank" href={project.pGitUrl}>
                              click!
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
