import BackBtn from "./BackBtn/BackBtn";
import CarDetails from "./CarDetails/CarDetails";
import CarGallery from "./CarGallery/CarGallery";
import CarInfo from "./CarInfo/CarInfo";

import cls from "./styles.module.scss";

//@ts-expect-error
export default function MainInfo({ data, pageId }: { pageId: string }) {
  const media =  [
    //@ts-expect-error
      ...data.imageUrls.map(src => ({ type: "image", src, })),
  ];
  if(data.video) {
    media.push({ type: "video", src: data.video })
  }
  console.log(media)
  return (
    <section className="container section">
      <div className={cls.wrapper}>
        <BackBtn />
        <div className={cls.contentWrapp}>
          {/*@ts-expect-error*/}
          <CarGallery data={media} pageId={pageId} />
          {/*@ts-expect-error*/}
          <CarInfo data={data} pageId={pageId} />
        </div>
        <CarDetails data={data} />
      </div>
    </section>
  );
}
