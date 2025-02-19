import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import SessionTitleControls from "@/components/1.molecules/17.SessionTitleControls";
import TextPublication from "@/templates/2.organisms/4.TextPublication";

import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";
import SelectableOptions from "@/templates/1.molecules/11.SelectableOptions";
import SimpleButton from "@/templates/0.atoms/11.SimpleButton";

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
      <TextPublication tags={tags} />
      <ContentCard>
        <ActivityHeader tags={tags} />
        <MarkdownShower markdown={"Wenas, soy una pregunta"} />
        <SelectableOptions
          options={["Wenas", "adios", "uff, nais", "otra mas", "y otra"]}
        />
        <SimpleButton
          buttonText="Enviar"
          className="bg-PrimCreamCan hover:bg-SecCreamCan sm:max-w-[50%] sm:self-center"
        />
      </ContentCard>
    </PageContentContainer>
  );
}
