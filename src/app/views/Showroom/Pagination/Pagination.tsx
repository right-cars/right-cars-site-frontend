import Image from "next/image";
import cls from "./styles.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (arr: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  goToPage,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <div className={cls.pagination}>
      <button
        className={cls.btn}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image
          src="/icons/arr-left.svg"
          alt="prev icon"
          width={16}
          height={16}
        />
        <h5 style={{ textTransform: "none" }} className={cls.txt}>
          Previous
        </h5>
      </button>
      <div className={cls.mainWrapp}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? cls.active : cls.pageBtn}
            onClick={() => goToPage(index + 1)}
          >
            <p className="textMedium">{index + 1}</p>
          </button>
        )).slice(0, 3)}

        {totalPages > 5 && currentPage < totalPages - 2 && (
          <span className={`${"textMedium"} ${cls.dots}`}>...</span>
        )}

        {totalPages > 5 && (
          <>
            <button
              onClick={() => goToPage(totalPages - 1)}
              className={cls.pageBtn}
            >
              <p className="textMedium">{totalPages - 1}</p>
            </button>
            <button
              onClick={() => goToPage(totalPages)}
              className={cls.pageBtn}
            >
              <p className="textMedium">{totalPages}</p>
            </button>
          </>
        )}
      </div>

      <button
        className={cls.btn}
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <h5 style={{ textTransform: "none" }} className={cls.txt}>
          Next
        </h5>
        <Image
          src="/icons/arr-left.svg"
          alt="next icon"
          width={16}
          height={16}
          style={{ transform: "scaleX(-1)" }}
        />
      </button>
    </div>
  );
}
