interface SimpleButtonProps {
  buttonText: string;
  className: string;
  onClick?: () => void;
}

export default function SimpleButton({
  buttonText,
  className,
  onClick = ()=>{}
}: SimpleButtonProps) {
  
  return (
    <button
      className={`rounded-lg border border-2 border-black px-4 py-1 ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
