import ContentCard from "@/templates/2.organisms/2.ContentCard";
import ActivityHeader from "@/templates/1.molecules/9.ActivityHeader";
import MarkdownShower from "@/templates/0.atoms/18.MarkdownShower";

interface TextPublicationProps {
  tags: string[];
  markdown?: string;
}

export default function TextPublication({
  tags,
  markdown,
}: TextPublicationProps) {
  if (!markdown) {
    markdown = `# Titulo 1 \n ## Titulo 2 \n ### Titulo 3 \n #### Titulo 4 \n Hola, soy una publicación de texto, conmigo puedes: \n - Hacer listas \n - **Poner texto en negrita** \n - *Poner texto en cursiva* \n - [Insertar enlaces](https://www.youtube.com/watch?v=dQw4w9WgXcQ) \n - Insertar imágenes \n <img src="https://www.esplora.co.uk/wp-content/uploads/2019/06/agrigento-hero.jpg" alt="Alt Text" width="300" height="200"> \n - Insertar código \n \`\`\`javascript \n console.log("Hola mundo"); \n \`\`\` \n - Insertar tablas \n \n | Nombre | Apellido | \n | ------ | -------- | \n | Juan | Perez | \n - Insertar citas \n > Esto es una cita \n - Insertar líneas horizontales \n --- \n Entre muchas otras cosas que puedes encontrar en la documentación de Markdown de github [aquí](https://docs.github.com/es/github/writing-on-github/basic-writing-and-formatting-syntax)`;
  }

  return (
    <ContentCard>
      <ActivityHeader tags={tags} rol="admin" />
      <MarkdownShower markdown={markdown} />
    </ContentCard>
  );
}
