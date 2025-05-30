"use client"

import { useState } from "react";

import FileUpload from "@/shared/components/FileUpload/FileUpload";
import { UploadTooltipType } from "@/shared/types/uploadTooltipType";

import cls from "./styles.module.scss";

interface Props {
  legalEntityType: string;
  initialFiles?: Record<string, File | null>;
}

interface DocumentLabel {
  label: string;
  tooltip?: boolean;
  tooltipVariant?: UploadTooltipType;
}

export default function DocumentsBlock({ legalEntityType, initialFiles={} }: Props) {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>(initialFiles)
  // console.log("🚀 ~ DocumentsBlock ~ uploadedFiles:", uploadedFiles);

  const handleFileUpload = (label: string, file: File | null) => {
    setUploadedFiles((prev) => ({ ...prev, [label]: file }));
    console.log(`Uploaded file for ${label}:`, file);
  };

  const documentLabels: DocumentLabel[] = (() => {
    switch (legalEntityType.toLowerCase()) {
      case "south african citizen":
        return [
          { label: "ID / Driver Licence" },
          {
            label: "Proof of physical address (not older than 3 months)",
            tooltip: true,
            tooltipVariant: "withList",
          },
        ];
      case "foreigner/ refugee":
        return [
          { label: "Passport" },
          { label: "Traffic register number document" },
          {
            label: "Proof of physical address (not older than 3 months)",
            tooltip: true,
            tooltipVariant: "withList",
          },
          {
            label: "Proof of address affidavit",
            tooltip: true,
            tooltipVariant: "onlyTitle",
          },
        ];
      case "asylum seeker":
        return [
          { label: "Refugee Document" },
          {
            label: "Proof of physical address (not older than 3 months)",
            tooltip: true,
            tooltipVariant: "withList",
          },
          {
            label: "Proof of address affidavit",
            tooltip: true,
            tooltipVariant: "onlyTitle",
          },
        ];
      default:
        return [];
    }
  })();

  return (
    <section>
      <h4 className={`${"titleSmall"} ${cls.title}`}>help us verify your identity</h4>
      <div className={cls.uploadBlock}>
        {documentLabels.map(({ label, tooltip, tooltipVariant }) => (
          <FileUpload
            key={label}
            tooltip={tooltip}
            tooltipVariant={tooltipVariant}
            label={label}
            onFileUpload={(file) => handleFileUpload(label, file)}
            file={uploadedFiles[label]}
          />
        ))}
      </div>
    </section>
  );
}
