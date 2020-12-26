import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.HeaderBox}>
      {/* <figure className={classes.ImageBox}>
        <img
          src={process.env.PUBLIC_URL + "/profileImage.jpg"}
          alt="Profile img"
          className={classes.ProfileImg}
        />
      </figure> */}

      <h3 className={classes.NameText}>Warakorn Chantranupong</h3>
      <h1 className={classes.HeadingText}>
        &ldquo;Developer Who Always Learning&rdquo;
      </h1>
      <button className={classes.btn}>About me</button>
    </div>
  );
};

export default Home;
