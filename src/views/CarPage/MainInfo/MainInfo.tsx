"use client";
import { useState } from "react";
import BackBtn from "./BackBtn/BackBtn";
import CarDetails from "./CarDetails/CarDetails";
import CarGallery from "./CarGallery/CarGallery";
import CarInfo from "./CarInfo/CarInfo";

import cls from "./styles.module.scss";
import Reserve from "@/views/Reserve/Reserve";

//@ts-expect-error
export default function MainInfo({ data, pageId }: { pageId: string }) {
  const [isCarInfoShown, setIsCarInfoShown] = useState(true);

  const media = [
    //@ts-expect-error
    ...data.images.map((src) => ({ type: "image", src })),
  ];
  if (data.video) {
    media.unshift({ type: "video", src: data.video });
  }

  return (
    <section className="container section">
      <div className={cls.wrapper}>
        <BackBtn />
        <div className={cls.contentWrapp}>
          {/*@ts-expect-error*/}
          <CarGallery data={media} pageId={pageId} />
          {isCarInfoShown ? (
            <CarInfo
                // @ts-expect-error*
              data={data}
              pageId={pageId}
              setIsCarInfoShown={setIsCarInfoShown}
            />
          ) : (
            <Reserve data={data} />
          )}
          <CarDetails data={data} />
        </div>
      </div>
    </section>
  );
}
