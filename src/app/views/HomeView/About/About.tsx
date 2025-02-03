import Team from "./Team/Team"
import WelcomeBlock from "./WelcomeBlock/WelcomeBlock"

export default function About() {
    return <section id="about" className="section container">
        <WelcomeBlock />
        <Team />
    </section>
}