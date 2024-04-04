import style from "../styles/homeContainer.module.css";
export default function AboutComponent() {
  return (
    <>
      <section id="aboutSection" className={style.about}>
        <div>
          <h1 className={style.gamtan}>ABOUT ME</h1>
        </div>
        <div className={`${style.aboutArea} ${style.container}`}>
          <div className={style.leftArea}>
            <div className={style.area}>
              <div className={style.info}>
                <p className={style.aboutTitle}>이름</p>
                <p className={style.aboutItem}>김창권</p>
              </div>
              <div className={style.info}>
                <p className={style.aboutTitle}>주소</p>
                <p className={style.aboutItem}>부산시 사하구</p>
              </div>
              <div className={style.info}>
                <p className={style.aboutTitle}>이메일</p>
                <p className={style.aboutItem}>
                  4571ck@
                  <br />
                  naver.com
                </p>
              </div>
            </div>
          </div>
          <div className={style.rightArea}>
            <div className={style.area}>
              <div className={style.info}>
                <p className={style.aboutTitle}>생년월일</p>
                <p className={style.aboutItem}>1996.08.07</p>
              </div>
              <div className={style.info}>
                <p className={style.aboutTitle}>연락처</p>
                <p className={style.aboutItem}>010-9331-9687</p>
              </div>
              <div className={style.info}>
                <p className={style.aboutTitle}>학력</p>
                <p className={style.aboutItem}>
                  동서대학교
                  <br />
                  (컴퓨터공학부)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
