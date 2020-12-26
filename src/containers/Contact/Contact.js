import React from "react";
import classes from "./Contact.module.css";
import ComingSoonText from "../../components/Coming_soon_text";

const Contact = () => {
  return (
    <div className={classes.ContactBox}>
      <ComingSoonText></ComingSoonText>
    </div>
  );
};

export default Contact;
