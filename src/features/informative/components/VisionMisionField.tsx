import Image from "next/image";
import { highlightWord } from "@/utils/styles/highlightWord";
import GridTwoColsRow from "../../../components/layout/GridTwoColsRow";

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
  return (
    <div className="flex w-full flex-col items-center justify-around gap-6 gap-y-6 rounded-3xl bg-white p-6 text-lg">
      <div className="flex flex-row gap-x-1 text-2xl">
        <span className="font-bold">Nuestra</span>
        <span className="font-bold text-AccentBlue">{title}</span>
      </div>
      <GridTwoColsRow>
        <div className="flex items-center">
          <span>{highlightWord(content, "Demokratica")}</span>
        </div>

        <div
          className={`flex items-center justify-center rounded-3xl bg-ThirdGray p-5 ${title === "Visión" ? "" : "sm:order-first"}`}
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
