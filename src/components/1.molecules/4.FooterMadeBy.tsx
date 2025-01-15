import NavBarFooter from "@/templates/1.molecules/1.NavBarFooter";
import { siteMapItem } from "@/types/siteMap";

export default function FooterMadeBy() {
  const madeBy: siteMapItem[] = [
    {
      name: "David Marín",
      link: "https://www.linkedin.com/in/david-felipe-marin-rosas-5a567b197/",
    },
    {
      name: "César Lemos",
      link: "https://www.linkedin.com/in/c%C3%A9sar-lemos-b9990a150/",
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
