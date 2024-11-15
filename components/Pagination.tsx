import cssModule from "src/styles/Pagination.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
  prevText?: string;
  prevUrl?: string;
  nextText: string;
  nextUrl: string;
};

export default function Pagination({
  prevText = "",
  prevUrl = "",
  nextText = "",
  nextUrl = "",
}: PaginationProps) {
  return (
    <ul className={cssModule.flexContainer}>
      {prevText && prevUrl && (
        <li className={cssModule.prev}>
          <Link href={prevUrl} className={cssModule.iconText}>
            <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
            <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={cssModule.next}>
          <Link href={nextUrl} className={cssModule.iconText}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
          </Link>
        </li>
      )}
    </ul>
  );
}
