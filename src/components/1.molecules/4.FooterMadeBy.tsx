import NavBarFooter from "@/templates/1.molecules/1.NavBarFooter";
import { siteMapItem } from "@/types/siteMap";

export default function FooterMadeBy() {
  const madeBy: siteMapItem[] = [
    {
      name: "David Marin",
      link: "https://www.linkedin.com/in/david-felipe-marin-rosas-5a567b197/",
    },
    {
      name: "Cesar Lemos",
      link: "https://www.linkedin.com/in/c%C3%A9sar-lemos-b9990a150/",
    },
    {
      name: "Andres Rojas",
      link: "/",
    },
    {
      name: "Julian Huertas",
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
