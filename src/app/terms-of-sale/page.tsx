import Link from "next/link";

import NestedList from "@/views/PrivacyPolicy/NestedList";
import Section from "@/views/PrivacyPolicy/Section";

import { termOfSaleData } from "./termOfSaleData";

import cls from "./styles.module.scss";

export default function TermsOfSale() {
  return (
    <section className={`container section ${cls.wrapper}`}>
      <h2>{termOfSaleData.title}</h2>
      <div className={cls.content}>
        <Section
          title={termOfSaleData.introduction.title}
          text={termOfSaleData.introduction.txt}
        />
        <Section
          title={termOfSaleData.rightofAdmissionReserved.title}
          list={termOfSaleData.rightofAdmissionReserved.list.items}
        />
        <NestedList
          title={termOfSaleData.requiredDocumentation.title}
          items={termOfSaleData.requiredDocumentation.list.items}
        />
        <Section
          title={termOfSaleData.disclaimer.title}
          list={termOfSaleData.disclaimer.list.items}
        />
        <Section
          title={termOfSaleData.pricingPayments.title}
          list={termOfSaleData.pricingPayments.list.items}
        />
        {/*<div>*/}
        {/*  <h3 className="titleSmall" style={{ marginBottom: 40 }}>*/}
        {/*    {termOfSaleData.additionalFees.title}*/}
        {/*  </h3>*/}
        {/*  <ul style={{ marginBottom: 80 }}>*/}
        {/*    {termOfSaleData.additionalFees.links.map((link, index) => (*/}
        {/*      <li key={index}>*/}
        {/*        <Link*/}
        {/*          href={link.href}*/}
        {/*          className="titleSmall"*/}
        {/*          style={{ color: "#F31260" }}*/}
        {/*        >*/}
        {/*          {link.name}*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    ))}*/}
        {/*  </ul>*/}
        {/*</div>*/}
        <div className={cls.addWrapp}>
          <h3 className="titleSmall">{termOfSaleData.notice.title}</h3>
          <Section
            title={termOfSaleData.notice.vehicleCondition.title}
            list={termOfSaleData.notice.vehicleCondition.list.items}
          />
          <Section
            title={termOfSaleData.notice.liability.title}
            text={termOfSaleData.notice.liability.list.listTitle}
            list={termOfSaleData.notice.liability.list.items}
            addItem
          />
        </div>
      </div>
    </section>
  );
}
