import Logo from "@/shared/components/Logo/Logo";

import Copyright from "./Copyright/Copyright";
import Documentation from "./Documentation/Documentation";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import Socials from "./Socials/Socials";

import cls from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={cls.footer}>
      <>
        <div className="container">
          <div className={cls.firstLine}>
            <FooterNavigation />
            <Logo variant="footer" />
          </div>
          <div className={cls.secondLine}>
            <div>
              <Socials />
              <Documentation />
            </div>
            <Copyright />
          </div>
        </div>
      </>
    </footer>
  );
}
