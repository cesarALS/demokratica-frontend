interface TextAreaTitleMarkdownProps {
  title: string;
  placeholder: string;
}

export default function TextAreaTitle({
  title,
  placeholder,
}: TextAreaTitleMarkdownProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-y-4 text-xl">
      {title}
      <textarea
        className="w-full rounded-lg border-2 border-PrimGray bg-ThirdGray p-2 text-lg leading-tight text-PrimBlack placeholder-PrimBlack focus:outline-none focus:ring-1 focus:ring-PrimBlack"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
