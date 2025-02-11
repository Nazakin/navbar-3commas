import { Link, useLocation } from "react-router-dom";

import Button from "../UI/Button/Button";
import DropDown from "../UI/DropDown/DropDown";
import BurgerMenu from "../UI/BurgerMenu/BurgerMenu";

import styles from "./Header.module.css";

const navList = [
  { to: "/", title: "Home" },
  { to: "/about-us", title: "About us" },
  {
    to: "/services",
    title: "Services",
    children: [
      { to: "/services/service-1", title: "Service 1" },
      { to: "/services/service-2", title: "Service 2" },
      { to: "/services/service-3", title: "Service 3" },
    ],
  },
  { to: "/testimonials", title: "Testimonials" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.contentWrapper}>
        <nav className={styles.linksContainer}>
          {navList.map((item) =>
            item.children ? (
              <DropDown key={item.to} data={item} />
            ) : (
              <Link
                key={item.to}
                className={`${location.pathname === item.to ? styles.currentLink : ""}`}
                to={item.to}
              >
                {item.title}
              </Link>
            ),
          )}
        </nav>
        <img src="Logo.svg" alt="Logo" className={styles.logo} />
        <div className={styles.authButtonsContainer}>
          <Button mode="primary">Register</Button>
          <Button mode="secondary">Sign in</Button>
        </div>
      </div>
      <BurgerMenu navList={navList} />
    </header>
  );
};

export default Header;
