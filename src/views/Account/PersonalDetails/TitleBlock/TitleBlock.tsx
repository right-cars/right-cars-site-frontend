import Image from "next/image";

import cls from "./styles.module.scss";

export default function TitleBlock({
  isEditing,
  title,
}: {
  isEditing: boolean;
  title: string;
}) {
  return (
    <div className={cls.titleBlock}>
      <h4 className="titleSmall">{title}</h4>
      {isEditing && (
        <Image src="/icons/edit.svg" alt="edit icon" width={24} height={24} />
      )}
    </div>
  );
}
