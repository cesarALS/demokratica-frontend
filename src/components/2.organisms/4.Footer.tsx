import demokraticaRoutes from "@/utils/routeUtils";
import NavBarFooter from "@/templates/1.molecules/1.NavBarFooter";
import { siteMapItem } from "@/types/siteMap";
import FooterMadeBy from "@/components/1.molecules/4.FooterMadeBy";
import LogoSelloCopyLemo from "@/components/1.molecules/3.LogoSelloCopyLemo";
import FooterSeparator from "../0.atoms/2.FooterSeparator";

export default function Footer() {
  const siteMapItems: siteMapItem[] = [
    demokraticaRoutes.ayuda,
    demokraticaRoutes.conocenos,
    demokraticaRoutes.planes,
  ];

  const importantLinksUser: siteMapItem[] = [
    demokraticaRoutes.cookies,
    demokraticaRoutes.userTerms,
  ];

  return (
    <footer className="flex flex-col items-start justify-center w-full bg-PrimGray p-10 gap-y-6">
      <hr className="w-full border-SecBlack border-2 rounded-lg" />
      {/* Div que cambia de row a col dependiendo del viewport */}
      <div className="flex flex-1 w-full flex-col lg:flex-row gap-y-6 lg:justify-around">
        {/* Sitemap */}
        <NavBarFooter
          siteMapItems={siteMapItems}
          classNameLink="font-bold italic text-lg text-PrimBlack hover:text-black"
        />
        <FooterSeparator />

        {/* Importantes para el usuario */}
        <NavBarFooter
          siteMapItems={importantLinksUser}
          classNameLink="font-bold italic text-lg text-PrimBlack hover:text-black"
        />
        <FooterSeparator />

        {/* Logo demokratica en estilo de sello */}
        <LogoSelloCopyLemo classNameLogo="w-[80%]" />

        {/* Hecho por */}
        <FooterSeparator />
        <FooterMadeBy />
      </div>
      <hr className="w-full border-SecBlack border-2 rounded-lg" />
    </footer>
  );
}
