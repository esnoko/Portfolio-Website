/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log("Menu open state:", menuOpen);
  }, [menuOpen]);

  const handleMenuItemClick = () => {
    setTimeout(() => setMenuOpen(false), 0);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <h1 className={styles.name}></h1>
      <div className={styles.menu} ref={menuRef}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <a href="#about" onClick={handleMenuItemClick}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleMenuItemClick}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleMenuItemClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleMenuItemClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
