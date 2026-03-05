interface CheckboxLabelPairProps {
  labelText: string;
  id: string;
  checkedValue?: boolean,
  onCheck?: (checked: boolean) => void;
}

export default function CheckboxLabelPair({
  labelText,
  id,
  checkedValue = false,
  onCheck = ()=>{}
}: CheckboxLabelPairProps) {
  return (
    <div className="flex items-center justify-center gap-x-1">
      <input 
        type="checkbox" 
        className="h-4 w-4 hover:cursor-pointer" 
        checked = {checkedValue}
        id={id} 
        onChange={e => onCheck(e.target.checked)}></input>
      <label
        htmlFor={id}
        className="text-sm font-semibold text-PrimBlack hover:text-black hover:cursor-pointer"
      >
        {labelText}
      </label>
    </div>
  );
}
