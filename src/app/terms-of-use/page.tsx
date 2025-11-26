import Section from "@/views/PrivacyPolicy/Section";

import { termsOfUseData } from "./termsOfUseData";

import cls from "./styles.module.scss";

export default function TermsOfUse() {
  return (
    <section className={`container section ${cls.wrapper}`}>
      <h2>{termsOfUseData.title}</h2>
      <div className={cls.content}>
        <Section
          title={termsOfUseData.introduction.title}
          text={termsOfUseData.introduction.txt}
        />
        <Section
          title={termsOfUseData.amendments.title}
          text={termsOfUseData.amendments.txt}
        />
        <Section
          title={termsOfUseData.disclaimerOfWarranties.title}
          text={termsOfUseData.disclaimerOfWarranties.list.listTitle}
          list={termsOfUseData.disclaimerOfWarranties.list.items}
        />
        <Section
          title={termsOfUseData.noBindingAgreements.title}
          text={termsOfUseData.noBindingAgreements.txt}
        />
        <Section
          title={termsOfUseData.intellectualPropertyRights.title}
          list={termsOfUseData.intellectualPropertyRights.list.items}
        />
        <Section
          title={termsOfUseData.limitationOfLiability.title}
          text={termsOfUseData.limitationOfLiability.list.listTitle}
          list={termsOfUseData.limitationOfLiability.list.items}
        />
        <Section
          title={termsOfUseData.governingLaw.title}
          text={termsOfUseData.governingLaw.txt}
        />
        <Section
          title={termsOfUseData.eligibility.title}
          text={termsOfUseData.eligibility.txt}
        />
      </div>
    </section>
  );
}
