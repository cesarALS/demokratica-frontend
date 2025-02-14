import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import ContentCard from "@/templates/2.organisms/2.ContentCard";

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
    </PageContentContainer>
  );
}
