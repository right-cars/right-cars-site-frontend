import Image from "next/image";
import { Media } from "@/shared/types/media";
import cls from "./styles.module.scss";

export default function ModalContent({
  currentMedia,
}: {
  currentMedia: Media;
}) {
  return (
    <div className={cls.modalWodalWrapp}>
      {currentMedia.type === "image" ? (
        <Image
          src={currentMedia.src}
          alt="Large preview"
          width={752}
          height={546}
          className={cls.modalContent}
        />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${currentMedia.src}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          className={cls.modalContent}
        />
      )}
    </div>
  );
}
