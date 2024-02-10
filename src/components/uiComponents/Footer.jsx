import React from "react";
import styles from "../../styles/style";
import logowhite from "../../assets/logow.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-10">
      <div className={` py-6 ml-4  ${styles.paddingX} pt-28 `}>
        <img src={logowhite} alt="Logo" />
      </div>
      <div className={` ${styles.marginX} border-t-2 border-gray-700 `}></div>
      <div className={` py-4  ${styles.paddingX}`}>
        <nav className="text-left ml-4">
          <a
            href="/privacy-policy"
            className={`${styles.paragraph4} text-white hover:text-gray-300 mr-4 md:block hidden`}
          >
            Made with 💗
          </a>
          <a
            href="/privacy-policy"
            className={`${styles.paragraph4} text-white hover:text-gray-300 mr-4`}
          >
            Privacy policy
          </a>
          <a
            href="/terms-of-use"
            className={`${styles.paragraph4} text-white hover:text-gray-300 mr-4`}
          >
            Terms of usage
          </a>
          <a
            href="/cancellation-policy"
            className={`${styles.paragraph4} text-white hover:text-gray-300 mr-4`}
          >
            Cancellation policy
          </a>
          <a
            href="/sitemap"
            className={`${styles.paragraph4} text-white hover:text-gray-300`}
          >
            Sitemap
          </a>
        </nav>
        <a
          className={`${styles.paragraph4} ${styles.paddingX}  text-white hover:text-gray-300 mr-4 md:hidden block`}
        >
          Made with 💗
        </a>
      </div>
    </footer>
  );
};

export default Footer;
