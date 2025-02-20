import Button from "@/shared/components/Buttons/Button/Button";

import cls from "./styles.module.scss";

interface Props {
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
}

export default function EditBtn({ isEditing, onEdit, onCancel }: Props) {
  return (
    <div className={cls.btnsWrapp}>
      {isEditing ? (
        <div className={cls.btnsFlex}>
          <Button text="Cancel" color="transparent" onClick={onCancel} />
          <Button text="Save" type="submit" />
        </div>
      ) : (
        <div className={cls.editBtn}>
          <Button text="Edit" type="button" onClick={onEdit} />
        </div>
      )}
    </div>
  );
}
