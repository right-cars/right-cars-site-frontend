import { useState } from "react";
import Image from "next/image";
import { UploadTooltipType } from "@/shared/types/uploadTooltipType";
import Tooltip from "./Tooltip";
import cls from "./styles.module.scss";

interface FileUploadProps {
  label: string;
    tooltip?: boolean;
  tooltipVariant?: UploadTooltipType;
  onFileUpload: (file: File | null) => void;
}

export default function FileUpload({
  label,
  onFileUpload,
    tooltip,
  tooltipVariant
}: FileUploadProps) {
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileUploaded(!!file);
    onFileUpload(file);
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.docTitleBlock}>
        {fileUploaded && (
          <Image
            src="/icons/verify.svg"
            alt="verify icon"
            width={40}
            height={40}
          />
        )}
        <p className={cls.title}>{label}</p>
      </div>
      <div className={cls.inputWithTooltip}>
        {tooltip && <Tooltip tooltipVariant={tooltipVariant} />}

        <label
          className={`${cls.label} ${
            fileUploaded ? cls.transparentLabel : cls.yellowLabel
          }`}
        >
          <input
            type="file"
            className={cls.input}
            onChange={handleFileUpload}
          />
          <Image
            src="/icons/material-upload.svg"
            alt="upload icon"
            width={20}
            height={20}
          />
          <p className="btnText"> {fileUploaded ? "REPLACE" : "UPLOAD"}</p>
        </label>
      </div>
    </div>
  );
}
