"use client";
import { useState } from "react";
import Image from "next/image";
import "./Header.scss";

import Button_type1 from "../UI/Button_type1/Button_type1";
import MobileNav from "../MobileNav/MobileNav";
import Link from "next/link";

export default function Header() {
  const navBtns = ["Головна", "Перевізникам", "Про нас", "Профіль перевізника"];
  const [activeBtn, setActiveBtn] = useState(navBtns[0]);

  return (
    <>
      <header className="Header">
        <div className="container">
          <Link href={"/"}>
            <Image src="Logo.svg" height={48} width={160} alt="Logo" />
          </Link>
          <MobileNav />
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
          <div>
            <Button_type1 text="Створити профіль" />
            <div></div>
            <button className="Header_singIn_btn">Увійти</button>
          </div>
        </div>
      </header>

      <div className="Header_height"></div>
    </>
  );
}
