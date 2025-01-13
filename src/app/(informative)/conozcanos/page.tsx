import VisionMisionField from "@/templates/1.molecules/0.VisionMisionField";
import ValoresEquipoContainer from "@/templates/1.molecules/1.ValoresEquipoContainer";
import ValoresCard from "@/templates/0.atoms/6.ValoresCard";
import EquipoCard from "@/templates/0.atoms/7.EquipoCard";

// Página de Quiénes Somos

const Who = () => {
  return (
    /*Contenedor principal de toda la página, contiene la imagen del header de la página y los recuadros con la información*/
    <div className="flex flex-col h-full w-full">
      {/*Contenedor de la imagen del header y la frasemt-52 lg:mt-80*/}
      <div className="min-h-80 lg:min-h-96 bg-[url('/img/imgHeaderConocenos.jpg')] bg-cover bg-[center_bottom_35%] flex flex-col justify-end items-end">
        <div className="bg-white/70 px-4 py-2 mb-5 rounded-md mr-5 lg:mr-20">
          <h1 className="text-black text-lg font-semibold lg:text-4xl">
            <span className="italic">Impulsamos</span>{" "}
            <span className="italic font-bold">decisiones</span>{" "}
            <span className="text-AccentBlue">colectivas</span>
          </h1>
        </div>
      </div>
      {/*Contenedor de los recuadros con la información*/}
      <div className="grid grid-cols-1 justify-items-center items-center gap-10 pt-10 pb-10 bg-gradient-to-b from-SecBlue to-white">
        <VisionMisionField
          title="Visión"
          content="Teniendo en cuenta las dificultades que sufren las organizaciones y los grupos sociales en general al llegar a un consenso, usando nuestro innovador enfoque respecto al consenso y a los procesos que llevan al mismo, Demokratica espera convertirse en una empresa de nicho en todo aquel sector que tenga la necesidad de realizar reuniones constantemente de más de 10 personas, facilitando la toma de sus decisiones y acuerdos."
          imgURL="/img/imgVision.jpg"
        />
        <VisionMisionField
          title="Misión"
          content="Demokratica ofrece servicios innovadores que facilitan la toma de decisiones dentro de todo tipo de grupos."
          imgURL="/img/imgMision.jpg"
        />
        <ValoresEquipoContainer title="Nuestros valores" type="valores">
          <ValoresCard/>
        </ValoresEquipoContainer>
        <ValoresEquipoContainer title="Conoce nuestro equipo" type="equipo">
          <EquipoCard/>
        </ValoresEquipoContainer>
      </div>
    </div>
  );
};

export default Who;
