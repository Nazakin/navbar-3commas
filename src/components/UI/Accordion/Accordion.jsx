import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Accordion.module.css";

const Accordion = ({ data, toggleAction }) => {
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
          <Link to={item.to} key={item.to} onClick={toggleAction}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
  toggleAction: PropTypes.func,
};

export default Accordion;
