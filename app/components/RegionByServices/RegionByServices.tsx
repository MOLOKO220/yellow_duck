"use client";
import Image from "next/image";
import { useState } from "react";
import "./RegionByServices.scss";

export default function RegionByServices() {
  const [expanded, setExpanded] = useState(false);

  const allCountry = [
    { name: "Франція", flag: "flag-fr.png" },
    { name: "Італія", flag: "flag-it.png" },
    { name: "Німеччина", flag: "flag-gm.png" },
    { name: "Нідерланди", flag: "flag-nd.png" },
    { name: "Іспанія", flag: "flag-sp.png" },
    { name: "Україна", flag: "flag-ua.svg" },
    { name: "Північна Корея", flag: "flag-nk.png" },
  ];

  return (
    <section className="RegionByServices">
      <h6>Обслуговуємо країни</h6>

      <ul className={`${expanded ? "RegionByServices__active" : ""}`}>
        {allCountry.map((item, i) => (
          <li key={i}>
            <Image
              src={`/${item.flag}`}
              width={43}
              height={32}
              alt={item.name}
            />
            {item.name}
          </li>
        ))}
      </ul>

      <button onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "Приховати" : "Усі країни"}
        <Image
          className={`${expanded ? "RegionByServices__btn-active" : ""}`}
          src="arrow.svg"
          height={18}
          width={18}
          alt="arrow"
        />
      </button>
    </section>
  );
}
