import Link from "next/link";
import "./Third_section.scss";
import Image from "next/image";

export default function Third_section() {
  const drivers = [
    {
      name: "Олександр",
      experience: "5 років",
      photo: "/Third_section_1.png",
      social: [
        { href: "/", icon: "/Third_section_ins.png", alt: "instagram" },
        { href: "/", icon: "/Third_section_link.png", alt: "linkedin" },
      ],
    },
    {
      name: "Ірина",
      experience: "3 роки",
      photo: "/Third_section_2.png",
      social: [
        { href: "/", icon: "/Third_section_ins.png", alt: "instagram" },
        { href: "/", icon: "/Third_section_link.png", alt: "linkedin" },
      ],
    },
    {
      name: "Володимир",
      experience: "7 років",
      photo: "/Third_section_1.png",
      social: [
        { href: "/", icon: "/Third_section_ins.png", alt: "instagram" },
        { href: "/", icon: "/Third_section_link.png", alt: "linkedin" },
      ],
    },
    {
      name: "Сергій",
      experience: "4 роки",
      photo: "/Third_section_1.png",
      social: [
        { href: "/", icon: "/Third_section_ins.png", alt: "instagram" },
        { href: "/", icon: "/Third_section_link.png", alt: "linkedin" },
      ],
    },
    {
      name: "Марія",
      experience: "6 років",
      photo: "/Third_section_2.png",
      social: [
        { href: "/", icon: "/Third_section_ins.png", alt: "instagram" },
        { href: "/", icon: "/Third_section_link.png", alt: "linkedin" },
      ],
    },
  ];

  return (
    <section className="Third_section">
      <div className="container">
        <header>
          <h3>Наші водії</h3>
          <Link href="/">Усі водії ({drivers.length})</Link>
        </header>
        <ul>
          {drivers.map((driver) => (
            <li key={driver.name}>
              <Image src={driver.photo} height={80} width={80} alt="photo" />
              <h6>{driver.name}</h6>
              <p>Досвід роботи: {driver.experience}</p>
              <div>
                {driver.social.map((s) => (
                  <Link key={s.alt} href={s.href}>
                    <Image src={s.icon} width={24} height={24} alt={s.alt} />
                  </Link>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
