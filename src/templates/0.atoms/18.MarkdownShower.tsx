import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";

interface MarkdownShowerProps {
  markdown: string;
}

export default function MarkdownShower({ markdown }: MarkdownShowerProps) {
  return (
    <div className="flex w-full rounded-lg border-2 border-PrimGray bg-ThirdGray px-4 py-4 max-h-[45vh] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-PrimGray">
      <div className="prose w-full max-w-full break-words leading-relaxed text-black [&>h1]:mb-1 [&>h2]:my-2 [&>h3]:my-2 [&>hr]:mt-6 [&>hr]:border-2 [&>hr]:border-SecBlack [&>ol>li]:marker:font-semibold [&>p]:my-2 [&>ul>li]:marker:text-PrimBlack">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
