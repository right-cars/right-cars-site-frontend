import DocumentsBlock from "@/views/Account/DocumentsBlock/DocumentsBlock";

export default function Documents() {
  const legalEntityType = "south African citizen";

  // const initialFiles = {
  //   "ID / Driver Licence": new File(["sample-content"], "driver-licence.pdf", {
  //     type: "application/pdf",
  //   }),
  //   "Proof of physical address (not older than 3 months)": new File(
  //     ["sample-content"],
  //     "driver-licence.pdf",
  //     {
  //       type: "application/pdf",
  //     }
  //   ),
  // };

  return (
    <DocumentsBlock
      legalEntityType={legalEntityType}
      // initialFiles={initialFiles}
    />
  );
}
