import FullLogo from "@/components/0.atoms/2.FullLogo";
import Link from "next/link";
import { hoverScale } from "@/utils/tailwindUtils";

interface LogoAlHomepageProps {
  classNameContainer?: string;
}

export default function LogoAlHomepage({
  classNameContainer,
}: LogoAlHomepageProps) {
  return (
    <div className={classNameContainer}>
      {/* Logo linkeado al homepage */}
      <Link href="/" passHref>
        <FullLogo
          baseFill="#000000"
          classNameGeneral={`flex items-center justify-center ${hoverScale(
            110,
            200
          )}`}
        />
      </Link>
    </div>
  );
}
