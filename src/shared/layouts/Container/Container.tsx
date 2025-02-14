import cls from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {
  const { children } = props;

  return <div className={cls.container}>{children}</div>;
}
