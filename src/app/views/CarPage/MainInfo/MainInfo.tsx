import BackBtn from "./BackBtn/BackBtn";
import CarDetails from "./CarDetails/CarDetails";
import CarGallery from "./CarGallery/CarGallery";
import CarInfo from "./CarInfo/CarInfo";
import cls from "./styles.module.scss";

export default function MainInfo({ pageId }: { pageId: string }) {
  return (
    <section className="container section">
      <div className={cls.wrapper}>
        <BackBtn />
        <div className={cls.contentWrapp}>
          <CarGallery pageId={pageId} />
          <CarInfo pageId={pageId} />
        </div>
        <CarDetails />
      </div>
    </section>
  );
}
