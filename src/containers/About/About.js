import React from "react";
import classes from "./About.module.css";
import ComingSoonText from "../../components/Coming_soon_text";

const About = () => {
  return (
    <div className={classes.AboutBox}>
      <ComingSoonText></ComingSoonText>
    </div>
  );
};

export default About;
