import Markdown from "react-markdown";

export default function MarkdownRenderer({
  fileContent,
}: {
  fileContent: string;
}) {
  return (
    <div>
      <Markdown>{fileContent}</Markdown>
    </div>
  );
}
