import Container from "@/shared/layouts/Container/Container";
import DetailsBlock from "../views/Faq/DetailsBlock";
import { data } from "./data";
import cls from "./styles.module.scss";

export default function Faq() {
  const { block1, block2 } = data;
  return (
    <Container>
      <section className={`${"container section"} ${cls.wrapper}`}>
        <h2>Faq</h2>
        <div className={cls.contentWrapper}>
          {[block1, block2].map((block, index) => (
            <DetailsBlock key={index} block={block} />
          ))}
        </div>
      </section>
    </Container>
  );
}
