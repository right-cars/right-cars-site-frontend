import ServiceForm from "@/modules/ServiceForm/ServiceForm";
import ServicesPageBanner from "@/modules/ServicesPageBanner/ServicesPageBanner";

export default function CarServicePage() {
  return (
    <>
      <ServicesPageBanner
        title="Book a Service"
        txt="Is your car in need of a good service? Simply book your service online, choose a time that works for you, and let us take care of the rest. We offer fast, reliable, and affordable services to keep you safe on the road. Schedule your appointment today and experience hassle-free car maintenance!"
        img="/images/services-pages/banner2.webp"
      />
      <ServiceForm isCarService />
    </>
  );
}
