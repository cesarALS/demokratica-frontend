import Image from "next/image";
import { highlightWord } from "@/utils/highlightWord";
import GridTwoColsRow from "../2.organisms/3.GridTwoColsRow";

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
  const fieldStyle: string =
    "flex flex-col items-center justify-around bg-white gap-6 rounded-3xl p-6 text-lg w-full flex-col gap-y-6";

  return (
    <div className={fieldStyle}>
      <div className="flex flex-row gap-x-1 text-2xl">
        <span className="font-bold">Nuestra</span>
        <span className="font-bold text-AccentBlue">{title}</span>
      </div>
      <GridTwoColsRow>
        <div className="flex items-center">
          <span>{highlightWord(content, "Demokratica")}</span>
        </div>

        <div
          className={`flex items-center justify-center rounded-3xl bg-ThirdGray p-5 ${title === "Visión" ? "" : "order-first"}`}
        >
          <Image
            src={imgURL}
            alt="ImagenReferencia"
            height={300}
            width={300}
            layout="responsive"
            className="h-auto w-auto rounded-3xl"
          />
        </div>
      </GridTwoColsRow>
    </div>
  );
}

export default VisionMisionField;
