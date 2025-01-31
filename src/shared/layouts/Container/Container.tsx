import cls from "./styles.module.scss";

interface Props{
    children:React.ReactNode
}

const Container = (props: Props) => {
    const { children } = props;

    return (<div className={cls.container}>{children}</div>)
}

export default Container;