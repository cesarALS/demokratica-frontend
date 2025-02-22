import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface IndicatorRightResultPlanningPokerProps {
  title: string;
  result?: string;
  orderButton?: boolean;
}

export default function IndicatorRightResultPlanningPoker({
  title,
  result,
  orderButton,
}: IndicatorRightResultPlanningPokerProps) {
  const [order, setOrder] = useState("asc");

  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-sm">{title}</div>
      {orderButton && (
        <button
          onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
          className="flex items-center justify-center rounded-lg border-2 border-AccentBlue bg-SecBlue font-semibold hover:bg-PrimBlue"
        >
          <FontAwesomeIcon
            icon={order === "asc" ? faCaretUp : faCaretDown}
            className="size-8 text-white"
          />
        </button>
      )}
      {!orderButton && (
        <div className="flex items-center justify-center rounded-lg border-2 border-SecBlack bg-ThirdGray p-1 font-semibold">
          {result}
        </div>
      )}
    </div>
  );
}
