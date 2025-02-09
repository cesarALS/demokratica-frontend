import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import ConfigNewSession from "@/components/4.pages/0.ConfigNewSession";

export default function NuevaSesion() {
  // TODO: Necesariamente debe haber un usuario para que se cargue esta página, por reglas del layout (todavía no implementado)

  return (
    // PageContentContainer
    <PageContentContainer>
      <ConfigNewSession />
    </PageContentContainer>
  );
}
