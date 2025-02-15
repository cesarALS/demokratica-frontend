import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import ContentCard from "@/templates/2.organisms/2.ContentCard";
import TidemanActivity from "@/templates/2.organisms/4.TidemanActivity";

export default function Sesion() {
  return (
    // Contenedor de la pagina que se ajusta al contenido
    <PageContentContainer>
      {/* Controles y Titulo de la sesión */}
      <SessionTitleControls />
      {/* TODO: Aqui debe ir un componente que procese la lista de actividades y las renderice según su tipo */}
      <ContentCard>
        <TidemanActivity mode = "resultados" tags = {["tag1","tag2","Sistemas de información","Ingeniería de Software","tag1","tag2","Sistemas de información","Ingeniería de Software"]} pregunta = "¿Ejemplo de enunciado de pregunta?" />
        <TidemanActivity mode = "participar" tags = {["tag1","tag2","Sistemas de información"]} pregunta = "¿Enunciado de pregunta 2?" />
      </ContentCard>
    </PageContentContainer>
  );
}
