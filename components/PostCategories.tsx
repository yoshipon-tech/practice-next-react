import cssModule from "src/styles/postCategories.module.css";

import Link from "next/link";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Category = {
  name: string;
  slug: string;
};

type categories = Category[];

export default function PostCategories({
  categories,
}: {
  categories: categories;
}) {
  return (
    <div className={cssModule.flexContainer}>
      <h3 className={cssModule.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
      <ul className={cssModule.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
