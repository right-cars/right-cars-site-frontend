import BusinessHours from "./BusinessHours/BusinessHours";
import ContactsInfo from "./ContactsInfo/ContactsInfo";
import FormBlock from "./FormBlock/FormBlock";
import Map from "./Map/Map";

import cls from "./styles.module.scss";

export default function ContactsBlock() {
  return (
    <section className="container section" id="contacts">
      <h2>Have Questions? </h2>
      <div className={cls.wrapper}>
        <FormBlock />
        <div className={cls.rightBlock}>
          <div className={cls.infoBlocks}>
            <BusinessHours />
            <ContactsInfo />
          </div>
          <Map />
        </div>
      </div>
    </section>
  );
}
