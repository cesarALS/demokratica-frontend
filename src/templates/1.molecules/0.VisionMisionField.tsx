import Image from "next/image";

interface VisionMisionFieldProps {
  title: string;
  content: string;
  imgURL: string;
}

export function VisionMisionField({
  title,
  content,
  imgURL,
}: VisionMisionFieldProps) {
  let fieldStyle: string =
    "flex items-center justify-around w-[80%] bg-white gap-5 rounded-3xl p-6" +
    (title === "Visión" ? " flex-col" : " flex-col");
  return (
    <div className={fieldStyle}>
      <span className="flex flex-row text-2xl">
        <span className="font-bold">Nuestra</span>        
        <span className="text-AccentBlue font-bold ml-1">{title}</span>
      </span>
      
      <span>{content}</span>
      <div className="rounded-3xl bg-ThirdGray p-5">
        <Image
          src={imgURL}
          alt="ImagenReferencia"
          height={300}
          width={300}
          className="rounded-3xl w-auto h-auto"
        />
      </div>
    </div>
  );
}

export default VisionMisionField;
