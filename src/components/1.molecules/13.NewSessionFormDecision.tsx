import SimpleButton from "@/templates/0.atoms/11.SimpleButton";

export default function AccountFormDecision() {
  return (
    <div className="flex items-center justify-center gap-x-4 py-2 text-xl">
      {/* TODO: hover colors */}
      <SimpleButton
        buttonText="Cancelar"
        className="hover:bg-SecCasablanca bg-PrimCasablanca"
      />
      <SimpleButton
        buttonText="Guardar"
        className="bg-PrimCreamCan hover:bg-SecCreamCan"
      />
    </div>
  );
}
