import ConfirmEmail from "@/modules/ConfirmEmail/ConfirmEmail";
import { Suspense } from 'react'

import cls from "./styles.module.scss";

export default function Faq() {
  return (
      <section className={`${"container section"} ${cls.wrapper}`}>
          <Suspense>
              <ConfirmEmail />
          </Suspense>
      </section>
  );
}
