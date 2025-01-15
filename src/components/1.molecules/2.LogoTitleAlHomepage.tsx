import TitleLogo from "@/templates/0.atoms/0.TitleLogo";
import Link from "next/link";
import { hoverScale } from "@/utils/tailwindUtils";

interface LogoAlHomepageProps {
  classNameLogo?: string;
  classNameLink?: string;
}

export default function LogoTitleAlHomepage({
  classNameLink,
  classNameLogo,
}: LogoAlHomepageProps) {
  return (
    // Logo linkeado al homepage
    <Link href="/" passHref className={classNameLink}>
      <TitleLogo
        baseFill="#000000"
        classNameGeneral={`flex items-center justify-center ${hoverScale(
          110,
          200
        )} ${classNameLogo}`}
      />
    </Link>
  );
}
