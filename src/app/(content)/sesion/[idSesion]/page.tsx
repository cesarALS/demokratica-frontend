import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import TextPublication from "@/templates/2.organisms/4.TextPublication";
import CommonVotationActivity from "@/templates/3.templates/0.CommonVotationActivity";
import TidemanActivity from "@/templates/2.organisms/5.TidemanActivity";

export default function Sesion() {
  // Inside the publication
  const tags = [
    "tag1",
    "tag2",
    "Sistemas de información",
    "Ingeniería de Software",
  ];

  return (
    // Contenedor de la pagina que se ajusta al contenido
    <PageContentContainer>
      {/* Controles y Titulo de la sesión */}
      <SessionTitleControls />
      {/* TODO: Aqui debe ir un componente que procese la lista de actividades y las renderice según su tipo */}
      {/* Publicación de texto de prueba, esto no puede quedar aquí */}
      <TextPublication tags={tags} />
      <CommonVotationActivity
        tags={tags}
        markdownQuestion="Wenas, soy una pregunta"
        options={["Wenas", "adios", "uff, naiss", "otra mas", "y otra"]}
        date={new Date().toISOString()}
      />
    </PageContentContainer>
  );
}
