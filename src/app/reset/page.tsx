import ResetPassword from "@/modules/ResetPassword/ResetPassword";

import { Suspense } from 'react'

import cls from "./styles.module.scss";

export default function Reset() {
  return (
      <section className={`${"container section"} ${cls.wrapper}`}>
          <Suspense>
              <ResetPassword />
          </Suspense>
      </section>
  );
}
