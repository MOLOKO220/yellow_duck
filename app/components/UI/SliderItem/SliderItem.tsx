import Image from "next/image";
import "./SliderItem.scss";

import type { Slide } from "../SimpleSlider/data";

export default function SliderItem({
  name,
  route,
  date,
  description,
  rating,
  photo,
}: Slide) {
  return (
    <div className="SliderItem">
      <header>
        <Image src={photo} alt="photo" height={72} width={72} />
        <div>
          <h6>{name}</h6>
          <div>{route}</div>
          <p>{date}</p>
        </div>
      </header>
      <main>{description}</main>
      <footer>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((i) => {
            const isFilled = rating >= i;
            return (
              <svg
                key={i}
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill={isFilled ? "#4640DE" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25 0.375L9.37438 4.67875L14.125 5.37313L10.6875 8.72125L11.4988 13.4513L7.25 11.2169L3.00125 13.4513L3.8125 8.72125L0.375 5.37313L5.12562 4.67875L7.25 0.375Z"
                  fill={isFilled ? "#4640DE" : "none"}
                  stroke="#4640DE"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
