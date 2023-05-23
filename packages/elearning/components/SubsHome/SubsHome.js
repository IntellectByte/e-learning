import React from "react";
import Styles from "@/components/SubsHome/SubsHome.module.css";
import { useMediaQuery } from "react-responsive";
const SubsHome = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="subscription-card">
      <a href="/learning/sub-form" style={{ cursor: "pointer" }}>
        <img className={Styles.img}
          src={
            isMobile ? "/images/sub-fs-home.png" : "/images/sub-fs-home-mobile.png"
          }
          style={{ borderRadius: "40px" }}
        />
      </a>
    </div>
  );
};
export default SubsHome;
