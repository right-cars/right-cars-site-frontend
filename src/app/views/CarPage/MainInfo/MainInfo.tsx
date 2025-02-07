import BackBtn from "./BackBtn/BackBtn";
import CarGallery from "./CarGallery/CarGallery";
import cls from "./styles.module.scss";

export default function MainInfo({ pageId }: { pageId: string }) {
  return (
    <section className="container section">
      <div className={cls.wrapper}>
        <BackBtn />
        <div className={cls.contentWrapp}>
          <CarGallery pageId={pageId} />
        </div>
      </div>
    </section>
  );
}
