import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Accordion.module.css";

const Accordion = ({ data }) => {
  const { title, children } = data;
  const [open, setOpen] = useState(false);

  const handleOpenAccordion = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={`${styles.accordionContainer} ${open ? styles.open : ""}`}>
      <button className={styles.accordionButton} onClick={handleOpenAccordion}>
        {title}
        <img
          src="arrow.svg"
          alt="arrow"
          className={`${styles.arrowIcon} ${open ? styles.open : ""}`}
        />
      </button>
      <div className={styles.optionContainer}>
        {children.map((item) => (
          <Link to={item.to} key={item.to}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.object,
};

export default Accordion;
