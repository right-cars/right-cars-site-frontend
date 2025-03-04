"use client";

import { useState, useRef, useEffect } from "react";

import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";

import { temporarymMediaList } from "./temporaryMediaList";
import MediaDisplay from "./MediaDisplay/MediaDisplay";
import ModalContent from "./ModalContent/ModalContent";
import Thumbnail from "./Thumbnail/Thumbnail";

import cls from "./styles.module.scss";

export default function CarGallery({ pageId }: { pageId: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const thumbnailsRef = useRef<HTMLDivElement | null>(null);
  const currentMedia = temporarymMediaList[currentIndex];

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : temporarymMediaList.length - 1
    );
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev < temporarymMediaList.length - 1 ? prev + 1 : 0
    );
  };

  const handleMainMediaChange = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleMainMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  useEffect(() => {
    const thumbnailsContainer = thumbnailsRef.current;
    if (thumbnailsContainer) {
      const activeThumbnail = thumbnailsContainer.querySelector(
        `.${cls.active}`
      ) as HTMLElement;
      if (activeThumbnail) {
        thumbnailsContainer.scrollLeft =
          activeThumbnail.offsetLeft -
          thumbnailsContainer.clientWidth / 2 +
          activeThumbnail.clientWidth / 2;
      }
    }
  }, [currentIndex]);

  return (
    <div className={cls.gallery}>
      <MediaDisplay
        currentMedia={currentMedia}
        handleMainMediaClick={handleMainMediaClick}
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentIndex={currentIndex}
        pageId={pageId}
        temporarymMediaList={temporarymMediaList}
      />

      <div className={cls.thumbnailContainer} ref={thumbnailsRef}>
        {temporarymMediaList.map((media, index) => (
          <Thumbnail
            key={index}
            media={media}
            index={index}
            currentIndex={currentIndex}
            handleMainMediaChange={handleMainMediaChange}
          />
        ))}
      </div>

        <ModalWindow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <ModalContent currentMedia={currentMedia} />
        </ModalWindow>
    </div>
  );
}
