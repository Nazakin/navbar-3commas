import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../Button/Button";
import Accordion from "../Accordion/Accordion";

import styles from "./BurgerMenu.module.css";

const BurgerMenu = ({ navList }) => {
  const location = useLocation();
  const [burger, setBurger] = useState(false);

  const toggleBurgerMenu = () => {
    setBurger((prev) => !prev);
  };

  useEffect(() => {
    toggleBurgerMenu();
  }, [location]);

  return (
    <>
      <button
        className={`${styles.toggleBurgerButton} ${burger ? styles.burger : ""}`}
        onClick={toggleBurgerMenu}
      ></button>
      <div
        className={`${styles.burgerMenuWrapper} ${burger ? styles.open : ""}`}
      >
        <nav className={styles.burgerMenuContainer}>
          {navList.map((item) =>
            item.children ? (
              <Accordion data={item} key={item.to} />
            ) : (
              <Link to={item.to} key={item.to}>
                {item.title}
              </Link>
            ),
          )}
        </nav>
        <div className={styles.authButtonsContainer}>
          <Button mode="primary">Register</Button>
          <Button mode="secondary">Sign in</Button>
        </div>
      </div>
    </>
  );
};

BurgerMenu.propTypes = {
  navList: PropTypes.object,
};
export default BurgerMenu;
