import FormBlock from "./FormBlock/FormBlock";
import cls from "./styles.module.scss";

export default function ContactsBlock() {
  return (
    <section className="container section">
      <h2>Have Questions? </h2>
      <div className={cls.wrapper}>
        <FormBlock />
      </div>
    </section>
  );
}
