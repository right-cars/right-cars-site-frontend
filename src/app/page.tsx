import Container from "@/shared/layouts/Container/Container";
import Banner from "./views/HomeView/Banner/Banner";
import NewestArrivals from "./views/HomeView/NewestArrivals/NewestArrivals";
import WhyChooseUs from "./views/HomeView/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    
    <Container>
      <Banner />
      <WhyChooseUs />
      <NewestArrivals/>
    </Container>
  );
}
