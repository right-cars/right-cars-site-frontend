"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import cls from "./styles.module.scss";

interface TeamCardProps {
  img: string;
  position: string;
  name: string;
  descr: string;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamCard({ img, position, name, descr, index }: TeamCardProps) {
  return (
    <motion.li
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cls.card}
    >
      <div className={cls.txtBlock}>
        <p className="text" style={{ marginBottom: 4 }}>{position}</p>
        <p className="btnText" style={{ color: "#5120B8", marginBottom: 24 }}>{name}</p>
        <p className="textSmall">{descr}</p>
      </div>
      <div className={cls.imgBlock}>
        <Image src={img} alt={position} width={150} height={160} className={cls.img} />
      </div>
    </motion.li>
  );
}
