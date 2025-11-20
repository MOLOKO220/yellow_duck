import Image from "next/image";
import "./Fourth_section.scss";

export default function Fourth_section() {
  return (
    <section className="Fourth_section">
      <div className="container">
        <header>
          <h5>Сервіс</h5>
          <p>Найкращі умови для вашого комфорту</p>
        </header>
        <ul>
          <li>
            <Image
              src={"./fourth_section1.svg"}
              height={48}
              width={48}
              alt="Кондиціонер"
            />
            <p>Кондиціонер</p>
          </li>
          <li>
            <Image
              src={"./fourth_section2.svg"}
              height={48}
              width={48}
              alt="Wi-Fi"
            />
            <p>Wi-Fi</p>
          </li>

          <li>
            <Image
              src={"./fourth_section3.svg"}
              height={48}
              width={48}
              alt="TV"
            />
            <p>TV</p>
          </li>

          <li>
            <Image
              src={"./fourth_section4.svg"}
              height={48}
              width={48}
              alt="Туалет"
            />
            <p>Туалет</p>
          </li>

          <li>
            <Image
              src={"./fourth_section5.svg"}
              height={48}
              width={48}
              alt=""
            />
            <p>Зручні сидіння</p>
          </li>

          <li>
            <Image
              src={"./fourth_section6.svg"}
              height={48}
              width={48}
              alt="Перевозимо тварин"
            />
            <p>Перевозимо тварин</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
