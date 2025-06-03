import Image from "next/image";

import { Media } from "@/shared/types/media";

import cls from "./styles.module.scss";

function getEmbedUrl(youtubeUrl: string) {
  // Создаём объект URL для удобного парсинга
  const url = new URL(youtubeUrl);

  // Извлекаем значение параметра "v"
  const videoId = url.searchParams.get('v');

  if (!videoId) {
    throw new Error('Видео ID не найден в URL');
  }

  // Формируем ссылку для iframe
  return `https://www.youtube.com/embed/${videoId}`;
}

export default function ModalContent({
  currentMedia,
}: {
  currentMedia: Media;
}) {
  console.log(currentMedia);

  return (
    <div className={cls.modalWodalWrapp}>
      {currentMedia.type === "image" ? (
        <Image
          src={currentMedia.src}
          alt="Large preview"
          width={752}
          height={546}
          className={cls.modalContent}
          unoptimized
        />
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={getEmbedUrl(currentMedia.src)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          className={cls.modalContent}
        />
      )}
    </div>
  );
}
