import style from "../styles/homeContainer.module.css";
import Image from "next/image";
export default function SkillsComponent() {
  return (
    <>
      <section id="skillsSection" className={style.skills}>
        <div>
          <div className={style.introBox}>SKILLS</div>
        </div>
        <div className={`${style.skillBoxArea} ${style.container}`}>
          <div className={style.skillBox}>
            <div className={style.skillTitle}>
              <h1 className={`${style.skillName} ${style.gamtan}`}>
                Front-end
              </h1>
            </div>
            <div className={style.skillList}>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/html.png"}
                  alt="html"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/css.png"}
                  alt="css"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/js.png"}
                  alt="js"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/ts.png"}
                  alt="ts"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/jquery.png"}
                  alt="jquery"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/bootstrap.png"}
                  alt="bootstrap"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/tailwind.png"}
                  alt="tailwind"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/react.png"}
                  alt="react"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/vue.png"}
                  alt="vue"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/next.png"}
                  alt="next"
                />
              </div>
              {/* <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/nuxt.png"}
                  alt="nuxt"
                />
              </div> */}
            </div>
          </div>
          <div className={style.skillBox}>
            <div className={style.skillTitle}>
              <h1 className={`${style.skillName} ${style.gamtan}`}>Back-end</h1>
            </div>
            <div className={style.skillList}>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/java.png"}
                  alt="java"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/springboot.png"}
                  alt="springboot"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/node.png"}
                  alt="node"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/nest.png"}
                  alt="nest"
                />
              </div>
            </div>
          </div>
          <div className={style.skillBox}>
            <div className={style.skillTitle}>
              <h1 className={`${style.skillName} ${style.gamtan}`}>
                Communication
              </h1>
            </div>
            <div className={style.skillList}>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/figma.png"}
                  alt="figma"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/notion.png"}
                  alt="notion"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/slack.png"}
                  alt="slack"
                />
              </div>
            </div>
          </div>
          <div className={style.skillBox}>
            <div className={style.skillTitle}>
              <h1 className={`${style.skillName} ${style.gamtan}`}>
                Deployment
              </h1>
            </div>
            <div className={style.skillList}>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/aws.png"}
                  alt="aws"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/vercel.svg"}
                  alt="vercel"
                />
              </div>
            </div>
          </div>
          <div className={style.skillBox}>
            <div className={style.skillTitle}>
              <h1 className={`${style.skillName} ${style.gamtan}`}>
                Version Control
              </h1>
            </div>
            <div className={style.skillList}>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/git.png"}
                  alt="git"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/githubLogo.png"}
                  alt="githubLogo"
                />
              </div>
            </div>
          </div>
          <div className={style.skillBox}>
            <div className={style.skillTitle}>
              <h1 className={`${style.skillName} ${style.gamtan}`}>Tool</h1>
            </div>
            <div className={style.skillList}>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/vscode.png"}
                  alt="vscode"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/eclipse.png"}
                  alt="eclipse"
                />
              </div>
              <div className={style.skillImgDiv}>
                <Image
                  width={100}
                  height={100}
                  className={style.skillImg}
                  src={"/img/intellij.png"}
                  alt="intellij"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
