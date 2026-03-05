import demokraticaRoutes from "@/utils/routes";
import NavBarFooter from "@/components/layout/NavBarFooter";
import LogoSelloCopyLemo from "@/components/logo/LogoSelloCopyLemo";
import { siteMapItem } from "@/utils/genericTypes";

export default function Footer() {
  const siteMapItems: siteMapItem[] = [
    demokraticaRoutes.ayuda,
    demokraticaRoutes.conocenos,
    demokraticaRoutes.planes,
  ];

  const importantLinksUser: siteMapItem[] = [
    // demokraticaRoutes.cookies,
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

// Componente auxiliar que introduce una pequeña separación en varios puntos del footer
function FooterSeparator() {
  return (
    <>
      <hr className="w-full border-SecBlack border-2 rounded-lg lg:hidden" />
      <div className="h-30 border-SecBlack border-2 rounded-lg hidden lg:flex"></div>
    </>
  );
}

function FooterMadeBy() {
  const madeBy: siteMapItem[] = [
    {
      name: "David Marín",
      link: "https://www.linkedin.com/in/david-felipe-marin-rosas-5a567b197/",
    },
    {
      name: "César Lemos",
      link: "https://www.linkedin.com/in/cesarals",
    },
    {
      name: "Andrés Rojas",
      link: "/",
    },
    {
      name: "Julián Huertas",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-y-2 text-lg">
      <div className="text-PrimBlack font-bold italic">Hecho con 💪 por:</div>
      <NavBarFooter
        siteMapItems={madeBy}
        classNameLink="text-PrimBlack font-bold italic hover:underline hover:text-black"
        classNameUl="grid grid-cols-2"
      />
    </div>
  );
}