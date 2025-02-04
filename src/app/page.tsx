import Container from "@/shared/layouts/Container/Container";
import About from "./views/HomeView/About/About";
import Banner from "./views/HomeView/Banner/Banner";
import ContactsBlock from "./views/HomeView/ContactsBlock/ContactsBlock";
import NewestArrivals from "./views/HomeView/NewestArrivals/NewestArrivals";
import WhyChooseUs from "./views/HomeView/WhyChooseUs/WhyChooseUs";
import CookiesPopup from "@/shared/components/Popups/CookiesPopup/CookiesPopup";

export default function Home() {
  return (
    <Container>
      <Banner />
      <WhyChooseUs />
      <NewestArrivals />
      <About />
      <ContactsBlock />
      <CookiesPopup/>
    </Container>
  );
}
