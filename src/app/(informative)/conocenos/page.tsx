import VisionMisionField from "@/templates/1.molecules/2.VisionMisionField";
import ValoresEquipoContainer from "@/templates/1.molecules/3.ValoresEquipoContainer";
import ValoresCard from "@/templates/0.atoms/4.ValoresCard";
import EquipoCard from "@/templates/0.atoms/5.EquipoCard";
import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";

// Página de Quiénes Somos

export default function Conocenos() {
  return (
    /*Contenedor principal de toda la página, contiene la imagen del header de la página y los recuadros con la información*/
    <div className="flex h-full w-full flex-col">
      {/*Contenedor de la imagen del header y la frase*/}
      <div className="flex min-h-80 flex-col items-end justify-end bg-[url('/img/imgHeaderConocenos.jpg')] bg-cover bg-[center_bottom_35%] lg:min-h-96">
        <div className="mb-5 mr-5 rounded-md bg-white/70 px-4 py-2 lg:mr-20">
          <h1 className="text-lg font-semibold text-black lg:text-4xl">
            <span className="italic">Impulsamos</span>{" "}
            <span className="font-bold italic">decisiones</span>{" "}
            <span className="text-AccentBlue">colectivas</span>
          </h1>
        </div>
      </div>
      {/*Contenedor de los recuadros con la información*/}
      <PageContentContainer>
        <VisionMisionField
          title="Visión"
          content="Para 2028, Demokratica aspira a ser la plataforma líder en la toma de decisiones grupales, integrando soluciones que permiten alcanzar consensos de manera efectiva, registrar acuerdos y fomentar la participación activa de todos los miembros del grupo."
          imgURL="/img/imgVision.jpg"
        />
        <VisionMisionField
          title="Misión"
          content="Demokratica integra soluciones que permiten a grupos de cualquier tamaño y ámbito alcanzar consensos, registrar acuerdos de forma clara y fomentar la participación activa de todos sus miembros."
          imgURL="/img/imgMision.jpg"
        />
        <ValoresEquipoContainer title="Nuestros valores" type="valores">
          <ValoresCard />
        </ValoresEquipoContainer>
        <ValoresEquipoContainer title="Conoce nuestro equipo" type="equipo">
          <EquipoCard />
        </ValoresEquipoContainer>
      </PageContentContainer>
    </div>
  );
}
