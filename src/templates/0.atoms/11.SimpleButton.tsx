interface SimpleButtonProps {
  buttonText: string;
  className: string;
}

export default function SimpleButton({
  buttonText,
  className,
}: SimpleButtonProps) {
  return (
    <button
      className={`rounded-lg border border-2 border-black px-4 py-1 ${className}`}
    >
      {buttonText}
    </button>
  );
}
