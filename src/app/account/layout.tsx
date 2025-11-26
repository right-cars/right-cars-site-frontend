import Sidebar from "@/modules/Sidebar/Sidebar";

import cls from "./styles.module.scss";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
   
  return (
    <>
      <div className={`${"container section"} ${cls.wrapper}`}>
        <Sidebar />
        <main className={cls.main}>{children}</main>
      </div>
    </>
  );
}
