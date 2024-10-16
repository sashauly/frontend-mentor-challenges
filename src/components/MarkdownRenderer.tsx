import Markdown from "react-markdown";

export default function MarkdownRenderer({
  fileContent,
}: {
  fileContent: string;
}) {
  return (
    <div className="flex justify-center font-mono">
      <Markdown className="prose lg:prose-xl">{fileContent}</Markdown>
    </div>
  );
}
