import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import PlanShow from "@/components/0.atoms/4.PlanShow";

export default function Sesion() {
  return (
    // Contenedor de la pagina que se ajusta al contenido
    <PageContentContainer>
      {/* Controles y Titulo de la sesión */}
      <SessionTitleControls />
      {/* TODO: Aqui debe ir un componente que procese la lista de actividades y las renderice según su tipo */}
      <ContentCard>
        Aquí va el componente que renderiza la lista de actividades
        correspondiente a la sesión, en el modo que corresponda, ya sea
        participación o resultados.
      </ContentCard>
      {/* Parte final para agregar actividades, las actividades aparecen en el orden de publicación */}
      <ContentCard>
        <div className="flex items-center text-2xl">Agregar Actividad</div>
        {/* Información del plan actual */}
        <PlanShow plan={0} />
        {/* Actividades restantes en esta sesión */}
        <div className="flex items-center justify-between gap-x-2 text-xl">
          <label>Actividades restantes:</label>
          <label className="flex flex-1 justify-center bg-ThirdGray">0</label>
        </div>
      </ContentCard>
    </PageContentContainer>
  );
}
