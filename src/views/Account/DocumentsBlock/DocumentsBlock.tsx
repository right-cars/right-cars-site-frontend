"use client"

import {useEffect, useState} from "react";

import FileUpload from "@/shared/components/FileUpload/FileUpload";
import { UploadTooltipType } from "@/shared/types/uploadTooltipType";

import cls from "./styles.module.scss";
import {getCurrentUser, updateUserDoc} from "@/api/auth";

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
  const [status, setStatus] = useState("verified");
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>(initialFiles)
  // console.log("🚀 ~ DocumentsBlock ~ uploadedFiles:", uploadedFiles);

  const documentLabels: DocumentLabel[] = (() => {
    switch (legalEntityType.toLowerCase()) {
      case "south african citizen":
        return [
          { label: "ID / Driver Licence", name: "idOrDriverLicence" },
          {
            label: "Proof of physical address (not older than 3 months)",
            tooltip: true,
            tooltipVariant: "withList",
            name: "proofOfPhysicalAddress"
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


  useEffect(() => {
    const fetchUser = async()=> {
      try {
        const token = localStorage.getItem("token");;
        const data = await getCurrentUser(token);
        setStatus(data.user.status);
        setUploadedFiles((prev) => {
          const {idOrDriverLicence, proofOfPhysicalAddress} = data.user;
          const copy = {...prev};
          if(idOrDriverLicence) {
            copy["ID / Driver Licence"] = idOrDriverLicence;
          }
          if(proofOfPhysicalAddress) {
            copy["Proof of physical address (not older than 3 months)"] = proofOfPhysicalAddress;
          }
          return copy
        });
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  const handleFileUpload = async (label: string, file: File | null, name: string) => {
    const formData = new FormData();
    //@ts-expect-error
    formData.append(name, file);
    try {
     const data = await updateUserDoc(formData);
      console.log(data);
      setStatus(data.status);
      setUploadedFiles((prev) => ({ ...prev, [label]: file }));
    }
    catch(error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h4 className={`${"titleSmall"} ${cls.title}`}>help us verify your identity</h4>
      <div className={cls.uploadBlock}>
        {/*@ts-expect-error*/}
        {documentLabels.map(({ label, tooltip, name, tooltipVariant }) => (
          <FileUpload
            key={label}
            tooltip={tooltip}
            tooltipVariant={tooltipVariant}
            label={label}
            name={name}
            status={status}
            onFileUpload={(file) => handleFileUpload(label, file, name)}
            file={uploadedFiles[label]}
          />
        ))}
      </div>
    </section>
  );
}
