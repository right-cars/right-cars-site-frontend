import AddBlock from "./AddBlock/AddBlock";
import MainBlock from "./MainBlock/MainBlock";

import cls from "./styles.module.scss";

export default function Banner() {
  return (
    <section className={`container ${cls.wrapper}`}>
      <h1 className={cls.title}>
        Affordable <br className={cls.br} />
        Cars for Every Lifestyle!
      </h1>
      <div className={cls.contetntWrapp}>
        <MainBlock />
        <AddBlock />
      </div>
    </section>
  );
}
