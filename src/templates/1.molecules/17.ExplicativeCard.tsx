import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface ExplicativeCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function ExplicativeCard({
  icon,
  title,
  description,
}: ExplicativeCardProps) {
  return (
    <div className="flex flex-col gap-y-4 border border-ThirdGray px-6 py-8 shadow-lg">
      <FontAwesomeIcon icon={icon} className="size-12 text-AccentBlue" />
      <div className="text-lg font-bold">{title}</div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
