import Link from "next/link";
import Image from "next/image";
import "./First_section.scss";

export default function First_section() {
  return (
    <section className="First_section">
      <div className="container">
        <header>
          Головна / Профіль перевізника /<span> Stripe </span>
        </header>
        <main>
          <Image
            className="Img_sidebar1"
            src="First_section_img2-sidebar.svg"
            width={700}
            height={700}
            alt="sidbar"
          />
          <Image
            className="Img_sidebar2"
            src="First_section_img2-sidebar.svg"
            width={700}
            height={700}
            alt="sidbar"
          />
          <Image
            src="First_section_img1.svg"
            width={172}
            height={172}
            alt="car"
          />
          <div>
            <header>
              <div>
                <h2>Stripe</h2>
                <div>43 Поїздок</div>
              </div>
              <main>
                <div>
                  <Image
                    src="First_section_img3.svg"
                    width={24}
                    height={24}
                    alt="earth"
                  />
                  <Link href={"https://stripe.com"}>https://stripe.com</Link>
                </div>
                <div>
                  <Image
                    src="First_section_img4.svg"
                    width={24}
                    height={24}
                    alt="phone"
                  />
                  <p>+38 (073) 555 55 55</p>
                </div>
              </main>
            </header>
            <ul>
              <div>
                <li>
                  <Image
                    src="First_section_img5.svg"
                    width={44}
                    height={44}
                    alt="..."
                  />
                  <div>
                    <p>На ринку від:</p>
                    <h6>Травень 31, 2011</h6>
                  </div>
                </li>
                <li>
                  <Image
                    src="First_section_img6.svg"
                    width={44}
                    height={44}
                    alt="..."
                  />
                  <div>
                    <p>Перевезених пасажирів</p>
                    <h6>4000+</h6>
                  </div>
                </li>
              </div>
              <div>
                <li>
                  <Image
                    src="First_section_img7.svg"
                    width={44}
                    height={44}
                    alt="..."
                  />
                  <div>
                    <p>Автопарк</p>
                    <h6>8 бусів</h6>
                  </div>
                </li>
                <li>
                  <Image
                    src="First_section_img8.svg"
                    width={44}
                    height={44}
                    alt="..."
                  />
                  <div>
                    <p>Обслуговуємо</p>
                    <h6>8 країн</h6>
                  </div>
                </li>
                <li>
                  <Image
                    src="First_section_img9.svg"
                    width={44}
                    height={44}
                    alt="..."
                  />
                  <div>
                    <p>Місто</p>
                    <h6>Львів</h6>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </main>
      </div>
    </section>
  );
}
