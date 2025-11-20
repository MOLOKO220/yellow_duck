import Header from "./components/Header/Header";
import First_section from "./components/First_section/First_section";
import Second_section from "./components/Second_section/Second_section";
import Third_section from "./components/Third_section/Third_section";
import Fourth_section from "./components/Fourth_section/Fourth_section";
import Fifth_section from "./components/Fifth_section/Fifth_section";
import Footer from "./components/Footer/Footer";

export default function page() {
  return (
    <>
      <Header />
      <First_section />
      <Second_section />
      <Third_section />
      <Fourth_section />
      <Fifth_section />
      <Footer />
    </>
  );
}
