import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./DropDown.module.css";

const DropDown = ({ data }) => {
  const { title, children } = data;
  const [active, setActive] = useState(false);
  const location = useLocation();
  const dropDownRef = useRef(null);

  const handleToggleDropDown = () => {
    setActive((prev) => !prev);
  };

  const isActiveLink = (arr) => {
    return arr.some((item) => location.pathname === item.to);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropDownContainer} ref={dropDownRef}>
      <button
        className={`${styles.dropDownButton} ${isActiveLink(children) ? styles.currentLink : ""}`}
        onClick={handleToggleDropDown}
      >
        {title}
        <img
          src="/assets/arrow.svg"
          className={`${styles.arrow} ${active ? styles.active : ""}`}
          alt="Arrow"
        />
      </button>
      {children.length && (
        <div className={`${styles.dropDownList} ${active ? styles.open : ""}`}>
          {children.map((child) => (
            <Link
              to={child.to}
              className={styles.optionContainer}
              key={child.to}
              onClick={handleToggleDropDown}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
DropDown.propTypes = {
  data: PropTypes.object,
};

export default DropDown;
