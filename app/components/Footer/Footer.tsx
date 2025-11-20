import Image from "next/image";
import "./Footer.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <header>
          <div className="Footer__first-block">
            <Link href="/">
              <Image
                src="/footer_Logo.svg"
                height={29}
                width={160}
                alt="Logo"
              />
            </Link>
            <p>Платформа пошуку перевізників та бронювання поїздок</p>
          </div>

          <div className="Footer__second-block">
            <h6>Клієнтам</h6>
            <Link href="/">Головна</Link>
            <Link href="/">Про нас</Link>
            <Link href="/">Ціни</Link>
            <Link href="/">Маршрути</Link>
            <Link href="/">Політика приватності</Link>
          </div>

          <div className="Footer__third-block">
            <h6>Перевізникам</h6>
            <Link href="/">Help Docs</Link>
            <Link href="/">Особистий кабінет</Link>
            <Link href="/">Оновлення</Link>
            <Link href="/">Контакти</Link>
          </div>

          <div className="Footer__fourth-block">
            <h6>Зворотній зв’язок</h6>
            <p>Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
            <div className="Footer__fourth-block__input-wrap">
              <input type="text" placeholder="Email Address" />
              <button>Надіслати</button>
            </div>
            <div>
              <Image
                src="./footer_phone.svg"
                alt="phone"
                height={24}
                width={24}
              />
              <p>+ 38 (073) 555 55 55</p>
            </div>
            <div>
              <Image
                src="./footer_mail.svg"
                alt="mail"
                height={24}
                width={24}
              />
              <p>gmail@gmail.com</p>
            </div>
          </div>
        </header>

        <footer>
          <p>2024 @ Sprinters. All rights reserved.</p>
          <div>
            <Link href="/">
              <Image src="/footer_fecebook.svg" height={32} width={32} alt="" />
            </Link>
            <Link href="/">
              <Image src="/footer_ints.svg" height={32} width={32} alt="" />
            </Link>
            <Link href="/">
              <Image src="/footer_o.svg" height={32} width={32} alt="" />
            </Link>
            <Link href="/">
              <Image src="/footer_link.svg" height={32} width={32} alt="" />
            </Link>
            <Link href="/">
              <Image src="/footer_twiter.svg" height={32} width={32} alt="" />
            </Link>
          </div>
        </footer>
      </div>
    </footer>
  );
}
