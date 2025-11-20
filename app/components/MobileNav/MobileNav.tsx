"use client";
import { useState, useRef } from "react";
import "./MobileNav.scss";

import Button_type1 from "../UI/Button_type1/Button_type1";

export default function MobileNav() {
  const navBtns = ["Головна", "Перевізникам", "Про нас", "Профіль перевізника"];
  const [activeBtn, setActiveBtn] = useState(navBtns[0]);

  const [openMenu, setOpenMenu] = useState(false);

  const MobileNavWrap = useRef<HTMLDivElement | null>(null);

  function showMenu() {
    MobileNavWrap.current?.classList.add("MobileNav_active");
  }

  function closeMenu() {
    //
    MobileNavWrap.current?.classList.remove("MobileNav_active");
  }

  return (
    <>
      <aside className="MobileNav_btn" onClick={() => setOpenMenu(true)}>
        <div></div>
        <div></div>
        <div></div>
      </aside>

      <aside className={`MobileNav ${openMenu ? "MobileNav_active" : ""}`}>
        <button
          className="MobileNav_close_btn"
          onClick={() => setOpenMenu(false)}
        >
          <div></div>
          <div></div>
        </button>
        <nav>
          {navBtns.map((btn) => (
            <Button_type1
              key={btn}
              text={btn}
              active={btn === activeBtn}
              onClick={() => setActiveBtn(btn)}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
