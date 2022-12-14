import React from "react";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classnames from "classnames";
import styles from "./appHeader.module.css";

export const AppHeader = () => {
  return (
    <header className={classnames(styles.header, "pl-5 pr-5 pb-5 pt-5")}>
      <nav className={styles.menu}>
        <div className={styles.menuGroup}>
          <a href="#" className={styles.menuElement}>
            <BurgerIcon type="primary" />
            <p
              className={classnames(
                styles.active,
                "text text_type_main-default"
              )}
              style={{ color: "#F2F2F3" }}
            >
              Конструктор
            </p>
          </a>
          <a href="#" className={styles.menuElement}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive">
              Лента заказов
            </p>
          </a>
        </div>

        <Logo />

        <a href="#" className={styles.menuElement}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default text_color_inactive">
            Личный кабинет
          </p>
        </a>
      </nav>
    </header>
  );
};
