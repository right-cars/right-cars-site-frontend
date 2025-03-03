"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Answer } from "@/shared/types/answer";

import cls from "./styles.module.scss";

interface AnswerProps {
  openIndex: number |null;
  index: number;
  answer: Answer;
}

export default function AnswerComponent({
  openIndex,
  index,
  answer,
}: AnswerProps) {
  return (
    <AnimatePresence>
      {openIndex === index && (
        <motion.div
          key={`answer-${index}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
            cursor: "default",
          }}
        >
          {answer.txt && (
            <p
              className="textMedium"
              style={{
                marginBottom: 32,
                textTransform: "lowercase",
                display: "inline-block",
              }}
              dangerouslySetInnerHTML={{ __html: answer.txt }}
            />
          )}{" "}
          {answer.link && (
            <Link
              href={answer.link.href}
              className={`${"textMedium"} ${cls.link}`}
            >
              {answer.link.name}
            </Link>
          )}
          <div className={cls.listsWrapp}>
            {answer.lists?.map((list, index) => (
              <div key={index} style={{ marginBottom: 32 }}>
                <p className="titleTiny" style={{ textTransform: "none" }}>
                  {list.title}
                </p>

                <ul
                  className={`${cls.list} ${
                    list.numbering && cls.numList
                  } ${"textMedium"}`}
                >
                  {list.items.map(({ txt, link, bold }, index) => (
                    <li key={index}>
                      <span
                        className="titleTiny"
                        style={{ textTransform: "none" }}
                      >
                        {bold}
                      </span>
                      <span>{txt}</span>{" "}
                      {link && (
                        <Link href={"/"} className={cls.link}>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
