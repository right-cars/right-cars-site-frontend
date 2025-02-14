import Container from "@/shared/layouts/Container/Container";
import CookiesPopup from "@/shared/components/Popups/CookiesPopup/CookiesPopup";
import About from "./views/HomeView/About/About";
import Banner from "./views/HomeView/Banner/Banner";
import CarListWithSlider from "../modules/CarListWithSlider/CarListWithSlider";
import ContactsBlock from "./views/HomeView/ContactsBlock/ContactsBlock";
import WhyChooseUs from "./views/HomeView/WhyChooseUs/WhyChooseUs";
import { temporaryData } from "@/modules/CarListWithSlider/temporaryData";

export default function Home() {
  return (
    <Container>
      <Banner />
      <WhyChooseUs />
      <CarListWithSlider title="Discover Our Newest Arrivals!" carsData={temporaryData}/>
      <About />
      <ContactsBlock />
      <CookiesPopup/>
    </Container>
  );
}
