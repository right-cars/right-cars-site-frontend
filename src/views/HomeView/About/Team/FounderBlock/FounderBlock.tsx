import Image from "next/image";

import VideoBlock from "./VideoBlock/VideoBlock";

// import img from "../../../../../../public/images/home/about/default.jpg";

import cls from "./styles.module.scss";

const data = {
  img: "/images/home/about/owner.png",
      name: "Eugene Vulakh",
};

export default function FounderBlock() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.infoBlock}>
        <div className={cls.imgBlock}>
          <Image src={data.img} alt={data.name} width={238} height={238} className={cls.img} />
          {/*<Image src="/images/home/banner/img1.webp" alt="some text" width="238" height="238" />*/}
          {/*<Image*/}
          {/*  src="/images/home/car-page/img1.png"*/}
          {/*  alt="Eugene Vulakh"*/}
          {/*  width={238}*/}
          {/*  height={238}*/}
          {/*  className={cls.img}*/}
          {/*/>*/}
        </div>
        <div className={cls.txtBlock}>
          <h3 className={`${"btnText"} ${cls.title}`}>
            Founder and CEO{" "}
            <span style={{ color: "#5120B8" }}>Eugene&nbsp;Vulakh</span>
          </h3>
          <p className="textMedium">
            Eugene, the founder of the company, combines his deep-rooted passion
            for cars with a commitment to exceptional customer service. He leads
            the team with a focus on integrity, excellence, and a relentless
            drive to deliver the best experience for every customer
          </p>
        </div>
      </div>
      <VideoBlock />
    </div>
  );
}
