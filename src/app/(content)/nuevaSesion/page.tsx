import PageContentContainer from "@/templates/2.organisms/1.PageContentContainer";
import ConfigNewSession from "@/components/4.pages/0.ConfigNewSession";

export default function NuevaSesion() {
  // TODO: Necesariamente debe haber un usuario para que se cargue esta página, por reglas del layout (todavía no implementado)

  // Cesar, por fa ya no lo hagas aquí, hazlo en el componente ConfigNewSession

  return (
    // PageContentContainer
    <PageContentContainer>
      <ConfigNewSession />
    </PageContentContainer>
  );
}
