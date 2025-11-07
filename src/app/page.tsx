import CookiesPopup from "@/shared/components/Popups/CookiesPopup/CookiesPopup";

import { temporaryData } from "@/modules/CarListWithSlider/temporaryData";

import About from "@/views/HomeView/About/About";
import Banner from "@/views/HomeView/Banner/Banner";
import CarListWithSlider from "../modules/CarListWithSlider/CarListWithSlider";
import ContactsBlock from "@/views/HomeView/ContactsBlock/ContactsBlock";
import WhyChooseUs from "@/views/HomeView/WhyChooseUs/WhyChooseUs";




export default function Home() {
  return (
    <>
      <Banner />
      <WhyChooseUs />
      {/* @ts-expect-error */}
      <CarListWithSlider title="Discover Our Newest Arrivals!" carsData={temporaryData}/>
      <About />
      <ContactsBlock />
      <CookiesPopup/>
    </>
  );
}
