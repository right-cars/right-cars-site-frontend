"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Answer } from "@/shared/types/answer";

import cls from "./styles.module.scss";
import AnswerComponent from "./Answer";

type Block = {
  question: string;
  answer: Answer;
};

type DetailsBlockProps = {
  block: Block[];
};

export default function DetailsBlock({ block }: DetailsBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cls.detailsContainer}>
      {block.map(({ question, answer }, index) => (
        <div key={index} className={cls.details}>
          <button
            className={cls.questionBlock}
            onClick={() => toggleDetails(index)}
          >
            <p className={`${"titleTiny"} ${cls.question}`}>{question}</p>
            <motion.div
              animate={{ rotate: openIndex === index ? -90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="icon"
                width={24}
                height={24}
                className={cls.svg}
              />
            </motion.div>
          </button>
          <AnswerComponent
            index={index}
            openIndex={openIndex}
            answer={answer}
          />
        </div>
      ))}
    </div>
  );
}
