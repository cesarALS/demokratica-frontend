

interface ValoresDataTypes {
  icono: string;
  valor: string;
  description: string;
}

export function ValoresCard() {
  const valoresData: ValoresDataTypes[] = [
    { icono: "", valor: "Colaboración", description: "" },
    { icono: "", valor: "Diálogo", description: "" },
    { icono: "", valor: "Eficiencia", description: "" },
    { icono: "", valor: "Orden", description: "" }
  ];

  return valoresData.map((valor, index) => {
    return (
      <div
        className="flex flex-col items-center justify-center gap-5"
        key={index}
      >
        <img src={valor.icono} alt="icono" className="w-20 h-20" />
        <h1 className="font-bold text-2xl">{valor.valor}</h1>
        <p className="text-center">{valor.description}</p>
      </div>
    );
  });
}

export default ValoresCard;
