import Image from "next/image";
import cls from "./styles.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  goToPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageButtons = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3);
      if (currentPage === 3) pages.push(4);
      pages.push("...", totalPages - 1, totalPages);
    } else if (currentPage === 4) {
      pages.push(1, "...", 3, 4, 5, "...", totalPages - 1, totalPages);
    } else if (currentPage === totalPages - 3) {
      // Наприклад, якщо totalPages = 13, currentPage = 10 → показати 9,10,11
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages - 1,
        totalPages
      );
    } else if (currentPage === totalPages - 2) {
      // Наприклад, currentPage = 11, total = 13 → показати 10,11,12,13
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else if (currentPage >= totalPages - 1) {
      // Наприклад, currentPage = 12 або 13 → показати лише останні 3
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages - 1,
        totalPages
      );
    }

    return pages;
  };

  const pageButtons = getPageButtons();

  return (
    <div className={cls.pagination}>
      <button
        className={cls.btn}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          src="/icons/showroom/arr-left.svg"
          alt="prev icon"
          width={16}
          height={16}
        />
        <p className={cls.txt}>Previous</p>
      </button>

      <div className={cls.mainWrapp}>
        {pageButtons.map((item, index) =>
          item === "..." ? (
            <span
              key={`dots-${index}`}
              className={`${"textMedium"} ${cls.dots}`}
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => goToPage(Number(item))}
              className={currentPage === item ? cls.active : cls.pageBtn}
            >
              <p className="textMedium">{item}</p>
            </button>
          )
        )}
      </div>

      <button
        className={cls.btn}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <p className={cls.txt}>Next</p>
        <Image
          src="/icons/showroom/arr-left.svg"
          alt="next icon"
          width={16}
          height={16}
          style={{ transform: "scaleX(-1)" }}
        />
      </button>
    </div>
  );
}
