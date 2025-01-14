import { siteMapItem } from "@/types/siteMap";
import Link from "next/link";

interface NavBarFooterProps {
  siteMapItems: siteMapItem[];
  classNameUl?: string;
  classNameLink?: string;
}

export default function NavBarFooter({
  siteMapItems,
  classNameUl = "flex flex-col gap-y-2",
  classNameLink = "hover:text-PrimBlack",
}: NavBarFooterProps) {
  return (
    <nav>
      <ul className={classNameUl}>
        {siteMapItems.map((item, index) => (
          <li key={index}>
            <Link className={classNameLink} href={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
