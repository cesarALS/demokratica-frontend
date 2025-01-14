import FullLogo from "@/templates/0.atoms/1.FullLogo";
import Link from "next/link";
import { hoverScale } from "@/utils/tailwindUtils";

interface LogoAlHomepageProps {
  classNameContainer?: string;
}

export default function LogoAlHomepage({
  classNameContainer,
}: LogoAlHomepageProps) {
  return (
    // Logo linkeado al homepage
    <Link href="/" passHref className={classNameContainer}>
      <FullLogo
        baseFill="#000000"
        classNameGeneral={`flex items-center justify-center ${hoverScale(
          110,
          200
        )}`}
      />
    </Link>
  );
}
