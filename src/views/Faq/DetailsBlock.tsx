import Image from "next/image";

import cls from "./styles.module.scss";

type Block = {
  question: string;
  answer: string;
};

type DetailsBlockProps = {
  block: Block[];
};

export default function DetailsBlock({ block }: DetailsBlockProps) {
  return (
    <div className={cls.detailsContainer}>
      {block.map(({ question, answer }, index) => (
        <details key={index} className={cls.details}>
          <summary className={cls.questionBlock}>
            <p className={`${"titleTiny"} ${cls.question}`}>{question}</p>
            <Image
              src="/icons/arrow-left.svg"
              alt="icon"
              width={24}
              height={24}
              className={cls.svg}
            />
          </summary>
          <p
            className="textMedium"
            style={{
              textTransform: "lowercase",
              paddingBottom: 8,
            }}
          >
            {answer}
          </p>
        </details>
      ))}
    </div>
  );
}
