import SimpleButton from "@/templates/0.atoms/11.SimpleButton";

export default function AccountFormDecision() {
  return (
    <div className="flex items-center justify-center gap-x-8 py-2 text-xl">
      {/* TODO: hover colors */}
      <SimpleButton buttonText="Cancelar" className="bg-PrimCasablanca" />
      <SimpleButton buttonText="Guardar" className="bg-PrimCreamCan" />
    </div>
  );
}
