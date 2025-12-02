"use client";

import { motion } from "framer-motion";

import { CarProps } from "@/shared/types/car";
import CarCard from "@/shared/components/CarCard/CarCard";
import AuctionCard from "./AuctionCard/AuctionCard";

import { listVariants } from "@/helpers/animation";

import cls from "./styles.module.scss";

// interface GalleryProps {
//   data: CarProps[];
//   currentPage: number;
//   activeTab: string;
// }

//@ts-expect-error
export default function Gallery({ data, currentPage, activeTab }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      // transition: { duration: 0.8, ease: "easeOut" },
    },
  };
console.log(data)
  return (
    <motion.div
      key={`${currentPage}-${activeTab}`}
      className={cls.gallery}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listVariants}
    >
      {/* @ts-expect-error */}
      {data.map((auction) => (
        <motion.div key={auction.auctionId} variants={cardVariants}>
          <AuctionCard
            id={auction.auctionId}
            img={auction.img}
            year={auction.year}
            name={auction.name}
            currentBid={auction.currentBid}
            transmission={auction.transmission}
            endDate={auction.endDate}
            endTime={auction.endTime}
            href={`/auction/${auction.id}`}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
