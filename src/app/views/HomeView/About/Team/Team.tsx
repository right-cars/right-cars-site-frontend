import FounderBlock from "./FounderBlock/FounderBlock";
import TeamList from "./TeamList/TeamList";
import cls from "./styles.module.scss";

export default function Team() {
  return (
    <>
      <div className={cls.txtBlock}>
        <h3 className={cls.title}>Meet Our Team</h3>
        <p className="textMedium">
          our dedicated team of automotive professionals is passionate about
          helping you find the perfect vehicle. with years of experience in the
          industry, each member of our team brings a wealth of knowledge and
          expertise:
        </p>
      </div>
      <FounderBlock />
      <TeamList />
    </>
  );
}
