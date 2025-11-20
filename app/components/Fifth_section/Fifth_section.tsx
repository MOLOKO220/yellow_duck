import Image from "next/image";
import "./Fifth_section.scss";

import SimpleSlider from "../UI/SimpleSlider/SimpleSlider";

export default function Fifth_section() {
  return (
    <section className="Fifth_section">
      <Image
        className="Fifth_section_back1"
        src={"/Fifth_section_back.svg"}
        alt="back"
        height={240}
        width={394}
      />
      <Image
        className="Fifth_section_back2"
        src={"/Fifth_section_back.svg"}
        alt="back"
        height={576}
        width={1038}
      />
      <div className="container">
        <main>
          <h3>
            Що <span>кажуть люди?</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button>Залишити відгук</button>
        </main>
        <aside>
          <SimpleSlider />
        </aside>
      </div>
    </section>
  );
}
