import FullLogo from "@/templates/0.atoms/1.FullLogo";

interface LogoSelloCopyLemoProps {
  classNameGeneral?: string;
  classNameLogo?: string;
}

export default function LogoSelloCopyLemo({
  classNameGeneral,
  classNameLogo,
}: LogoSelloCopyLemoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-y-2 bg-SecGray p-1 rounded-lg border-2 border-black text-PrimBlack font-bold italic ${classNameGeneral}`}
    >
      <div>La cooperación es la cuna del progreso</div>
      <br />
      {/* Logo demokratica full */}
      <FullLogo
        classNameGeneral={classNameLogo}
        baseFill="#8d8d8d"
        contrasteFill="#1988ff"
      />
      {/* Copyright notice */}
      <div className="text-center">
        © 2025 Demokratica
        <br /> Todos los derechos reservados.
      </div>
    </div>
  );
}
