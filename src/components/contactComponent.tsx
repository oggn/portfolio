"use client";
import style from "../styles/homeContainer.module.css";
import Image from "next/image";
export default function ContactComponent() {
  const goGithub = () => {
    window.open("https://github.com/oggn", "_blank");
  };
  const goInsta = () => {
    window.open("https://www.instagram.com/oggn__/", "_blank");
  };
  return (
    <>
      <section className={style.contact}>
        <div>
          <div className={style.introBox}>CONTACT</div>
        </div>
        <footer className={style.footer}>
          <div className={style.snsList}>
            <div className={style.gitBg}>
              <Image
                width={100}
                height={100}
                src={"/img/github.png"}
                alt="깃허브"
                onClick={goGithub}
              />
              <Image
                width={100}
                height={100}
                src={"/img/insta.png"}
                alt="인스타"
                onClick={goInsta}
              />
            </div>
          </div>
          <p>© 2024. oggn. All rights reserved.</p>
        </footer>
      </section>
    </>
  );
}
