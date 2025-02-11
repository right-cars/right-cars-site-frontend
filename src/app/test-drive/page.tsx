import Container from "@/shared/layouts/Container/Container";
import ServiceForm from "@/modules/ServiceForm/ServiceForm";
import ServicesPageBanner from "@/modules/ServicesPageBanner/ServicesPageBanner";

export default function TestDrivePage() {
    return <Container>
        <ServicesPageBanner title="Book a test drive" txt="Take the next step toward your dream car! Fill out our contact form, and one of our agents will reach out to schedule your test drive at a time that works for you." img="/images/services-pages/banner3.webp" />
        <ServiceForm isCarService={false} />
        
    </Container>
}