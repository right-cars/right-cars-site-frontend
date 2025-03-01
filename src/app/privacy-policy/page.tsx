import Link from "next/link";

import NestedList from "@/views/PrivacyPolicy/NestedList";
import Section from "@/views/PrivacyPolicy/Section";

import { privacyPolicyContent } from "./content";

import cls from "./styles.module.scss";

export default function PrivacyPolicy() {
  return (
    <section className={`container section ${cls.wrapper}`}>
      <h2>{privacyPolicyContent.title}</h2>
      <div className={cls.content}>
        <Section
          title={privacyPolicyContent.introduction.title}
          text={privacyPolicyContent.introduction.txt}
        />
        <Section
          title={privacyPolicyContent.updates.title} 
          text={privacyPolicyContent.updates.list.listTitle}
          list={privacyPolicyContent.updates.list.items}
        />
        <Section
          title={privacyPolicyContent.privacySecurity.title}
          text={privacyPolicyContent.privacySecurity.txt}
        />
        <NestedList
          title={privacyPolicyContent.collectInfo.title}
          items={privacyPolicyContent.collectInfo.list.items}
        />
        <Section
          title={privacyPolicyContent.cookies.title}
          text={privacyPolicyContent.cookies.list.listTitle}
          list={privacyPolicyContent.cookies.list.items}
        />
        <Section
          title={privacyPolicyContent.thirdPartyLinks.title}
          text={privacyPolicyContent.thirdPartyLinks.txt}
        />
        <Section
          title={privacyPolicyContent.howWeCollectInfo.title}
          text={privacyPolicyContent.howWeCollectInfo.txt}
        />
        <Section
          title={privacyPolicyContent.howWeUseInfo.title}
          text={privacyPolicyContent.howWeUseInfo.list.listTitle}
          list={privacyPolicyContent.howWeUseInfo.list.items}
        />
        <Section
          title={privacyPolicyContent.sharing.title}
          text={privacyPolicyContent.sharing.list.listTitle}
          list={privacyPolicyContent.sharing.list.items}
        />
        <Section
          title={privacyPolicyContent.dataRetention.title}
          text={privacyPolicyContent.dataRetention.txt}
        />
        <Section
          title={privacyPolicyContent.accessData.title}
          text={privacyPolicyContent.accessData.list.listTitle}
          list={privacyPolicyContent.accessData.list.items}
        />
        <Section
          title={privacyPolicyContent.dataSecurityMeasures.title}
          text={privacyPolicyContent.dataSecurityMeasures.txt}
        />
        <Section
          title={privacyPolicyContent.websiteAvailability.title}
          text={privacyPolicyContent.websiteAvailability.txt}
        />
        <Section
          title={privacyPolicyContent.complianceWithLaws.title}
          text={privacyPolicyContent.complianceWithLaws.txt}
        />
        <div>
          <h3 className="titleSmall">
            {privacyPolicyContent.complaints.title}
          </h3>
          <p className="textMedium">{privacyPolicyContent.complaints.txt}</p>
          <Link
            className="textMedium"
            href={`tel:${privacyPolicyContent.complaints.tel}`}
          >
            {privacyPolicyContent.complaints.tel}
          </Link>
          <br />
          <Link
            className="textMedium"
            href={`mailto:${privacyPolicyContent.complaints.mail}`}
          >
            {privacyPolicyContent.complaints.mail}
          </Link>
          <p className="textMedium">{privacyPolicyContent.complaints.txt2}</p>
        </div>
      </div>
    </section>
  );
}
