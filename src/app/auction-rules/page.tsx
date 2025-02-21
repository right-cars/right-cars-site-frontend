import Link from "next/link";

import Section from "@/views/PrivacyPolicy/Section";

import { auctionData } from "./auctionRulesData";

import cls from "./styles.module.scss";

export default function AuctionRules() {
  return (
    <section className={`container section ${cls.wrapper}`}>
      <h2>{auctionData.title}</h2>
      <div className={cls.content}>
        <div>
          <h3 className="titleSmall">{auctionData.introduction.title}</h3>
          <p className="textMedium">{auctionData.introduction.txt}</p>
          <p className="textMedium">
            Contact details:{" "}
            <Link href={"tel:0114629045"}>{auctionData.introduction.tel}</Link>
          </p>
          <ul>
            {auctionData.introduction.list.items.map((item, index) => (
              <li key={index} className="textMedium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Section
          title={auctionData.registration.title}
          list={auctionData.registration.list.items}
        />
        <Section
          title={auctionData.buyerResponsibility.title}
          list={auctionData.buyerResponsibility.list.items}
        />
        <Section
          title={auctionData.paymentDelivery.title}
          list={auctionData.paymentDelivery.list.items}
        />
        <Section
          title={auctionData.defaultByBuyer.title}
          text={auctionData.defaultByBuyer.list.listTitle}
          list={auctionData.defaultByBuyer.list.items}
        />
        <Section
          title={auctionData.auctionPolicies.title}
          list={auctionData.auctionPolicies.list.items}
        />
        <Section
          title={auctionData.liabilityRisk.title}
          list={auctionData.liabilityRisk.list.items}
        />
        <Section
          title={auctionData.legalProvisions.title}
          list={auctionData.legalProvisions.list.items}
        />
        <div>
          <h3 className="titleSmall">{auctionData.privacy.title}</h3>
          <ul style={{ listStyle: "disc", paddingLeft: 16 }}>
            {auctionData.privacy.list.items.map(({ name, link }, index) => (
              <li key={index} className="textMedium">
                {name}{" "}
                {link && (
                  <Link
                    href="/privacy-policy"
                    style={{ color: "#4C2699", textDecoration: "underline" }}
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
