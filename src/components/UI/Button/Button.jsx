import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ mode = "primary", children }) => {
  return (
    <button
      className={`${styles.button} ${mode === "primary" ? styles.primary : styles.secondary}`}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.string,
};
export default Button;
