interface CheckboxLabelPairProps {
  labelText: string;
  id: string;
}

export default function CheckboxLabelPair({
  labelText,
  id,
}: CheckboxLabelPairProps) {
  return (
    <div className="flex items-center justify-center gap-x-1">
      <input type="checkbox" className="h-4 w-4" id={id}></input>
      <label
        htmlFor={id}
        className="font-semibold text-PrimBlack hover:text-black"
      >
        {labelText}
      </label>
    </div>
  );
}
