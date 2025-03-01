import FullLogo from "@/templates/0.atoms/1.FullLogo";
import Headache from "@/templates/0.atoms/21.HeadacheIcon";
import {
  faMobileScreen,
  faMessage,
  faComments,
  faMagnifyingGlass,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import ExplicativeCard from "@/templates/1.molecules/17.ExplicativeCard";
import CarouselDescriptor from "@/templates/3.templates/5.CarouselDescriptor";
import { Slide } from "@/templates/3.templates/5.CarouselDescriptor";

export default function Home() {
  // A react fragment, cause we don't need a wrapping element

  const slides: Slide[] = [
    {
      image: "/img/Expresate.png",
      title: "Expresate libremente",
      description:
        "Usando todo el potencial del markdown de github para tus publicaciones.",
    },
    {
      image: "/img/SesionesConfigurables.png",
      title: "Sesiones configurables",
      description:
        "Que se adaptan a tu entorno y a las necesidades que este te plantea.",
    },
    {
      image: "/img/TiposDeVotacion.png",
      title: "Tipos de votación",
      description:
        "Votación común, planning poker, wordcloud y votación de Tideman, todas en un solo lugar.",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col">
      {/* 11/12*100 = 91.667, es el height restante del viewport quitando el header y teniendo en cuenta las proporciones */}
      {/* Container inicial, donde se encuentra el punto de dolor y la llamada a la acción */}
      <div className="flex h-auto w-full flex-col bg-SecBlue p-10 text-white sm:h-auto md:px-[5%] lg:px-[10%] xl:px-[10%] 2xl:px-[20%]">
        <div className="flex w-full flex-col items-center justify-center gap-y-8">
          <h1 className="text-center text-5xl font-bold">
            Decisiones Grupales
          </h1>
          <div className="flex flex-col items-center justify-center gap-y-8 md:grid md:grid-cols-2 md:grid-rows-1">
            <div className="flex flex-col gap-y-8">
              <p className="text-lg font-semibold">
                Sabemos lo{" "}
                <span className="font-bold text-AccentBlue">importantes</span>{" "}
                que son en nuestras vidas y aún así las tememos por lo{" "}
                <span className="font-bold text-AccentBlue">complicadas</span>{" "}
                que pueden resultar.
              </p>
              <p className="hidden text-lg font-semibold lg:block">
                Por eso, queremos brindarte una solución...
              </p>
            </div>
            <div className="flex max-w-xs items-center justify-center">
              <Headache className="w-full" fill="white" />
            </div>
          </div>
          <div className="self-start text-lg font-semibold">
            <p className="lg:hidden">
              Por eso, queremos brindarte una solución...
            </p>
          </div>
        </div>
      </div>
      {/* Container de fondo transparente donde se expone lo que hace demokratica */}
      <div className="flex h-auto w-full flex-col gap-y-8 bg-transparent bg-gradient-to-b from-SecBlue to-white px-10 pb-10 text-black md:px-[5%] lg:px-[10%] xl:px-[10%] 2xl:px-[20%]">
        <div className="py-10 text-5xl font-bold">En:</div>
        <div className="flex flex-col items-center justify-center gap-x-6 gap-y-8 md:grid md:grid-cols-2 md:grid-rows-1">
          <FullLogo classNameGeneral="w-full" baseFill="black" />
          <p className="text-lg">
            Dentro de una misma plataforma te ofrecemos la posibilidad de
            integrar los componentes necesarios para que tus decisiones fluyan,
            facilitando y agilizando tus procesos de decisión.
          </p>
        </div>
        <div className="flex h-60 w-full max-w-sm flex-col items-center justify-center self-center text-5xl font-bold">
          <div className="flex w-full flex-col gap-y-2">
            <div className="self-start">¿Deseas</div>
            <div className="self-center">saber</div>
            <div className="self-end">cómo?</div>
          </div>
        </div>
      </div>
      {/* Container de fondo blanco donde están las cartas que hablan sobre las bondades de la aplicación */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-8 bg-white px-10 pb-10 sm:flex-row md:px-[5%] lg:px-[10%] xl:px-[10%] 2xl:px-[20%]">
        {/* Cartas cada una con una bondad */}
        <ExplicativeCard
          icon={faMobileScreen}
          title="Sesiones"
          description="Cada reunión es una sesión, a la cual puedes invitar a los
          participantes y asignarles un rol según corresponda."
        />
        <ExplicativeCard
          icon={faMessage}
          title="Publicaciones"
          description="Dentro de cada sesión los participantes con los roles adecuados pueden realizar publicaciones usando markdown."
        />
        <ExplicativeCard
          icon={faComments}
          title="Actividades"
          description="Además de las publicaciones textuales, se pueden publicar actividades, en las cuales los participantes pueden contribuir con sus respuestas."
        />
        <ExplicativeCard
          icon={faFolderOpen}
          title="Centro de usuario"
          description="Cada usuario tiene un centro donde puede acceder tanto las sesiones que le pertenecen como en las que ha participado."
        />
        <ExplicativeCard
          icon={faMagnifyingGlass}
          title="Tags y filtros"
          description="Tanto las sesiones como las publicaciones y actividades pueden ser etiquetadas y filtradas para facilitar su búsqueda."
        />
      </div>
      {/* Finalmente un carrusel con screenshots y descripciones de las actividades */}
      <div className="flex flex-col gap-8 bg-gradient-to-b from-white to-PrimGray px-10 pb-10 md:px-[5%] lg:px-[10%] xl:px-[10%] 2xl:px-[20%]">
        {/* Titulo del carrusel */}
        <div className="flex h-60 w-full max-w-sm flex-col items-center justify-center self-center text-5xl font-bold">
          <div className="flex w-full flex-col gap-y-2">
            <div className="self-start">¿Quieres</div>
            <div className="self-center">dar un</div>
            <div className="self-end">vistazo?</div>
          </div>
        </div>
        {/* Carrusel */}
        <CarouselDescriptor slides={slides} />
      </div>
    </div>
  );
}
