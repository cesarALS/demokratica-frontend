import Image from "next/image";
import { highlightWord } from "@/utils/highlightWord";
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
  /* w-[80%] xl:w-[65%] 2xl:w-[55%] */
    "flex items-center justify-around bg-white gap-5 rounded-3xl p-6 text-lg w-full max-w-[390px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[780px] xl:max-w-[950px] flex-col" +
    (title === "Visión" ? " lg:flex-row" : " lg:flex-row-reverse");

  return (
    <div className={fieldStyle}>
      <div className="justify-items-center lg:max-w-[50%]">
        <span className="flex flex-row text-2xl mb-3">
          <span className="font-bold">Nuestra</span>
          <span className="text-AccentBlue font-bold ml-1">{title}</span>
        </span>

        <span>{highlightWord(content, "Demokratica")}</span>
      </div>

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
