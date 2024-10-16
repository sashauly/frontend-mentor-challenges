import IFrameComponent from "@/components/IFrameComponent";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import fs from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";

export const blogPreviewCardUrl = "blog-preview-card";
const blogPreviewCardMarkup = `/${blogPreviewCardUrl}/index.html`;
const blogPreviewCardMarkdown: string = `/${blogPreviewCardUrl}/README.md`;

const filePath = path.join(process.cwd(), "/public", blogPreviewCardMarkdown);

export const getStaticProps: GetStaticProps = (async () => {
  const fileContent = await fs.readFileSync(filePath, "utf8");
  return { props: { fileContent } };
}) satisfies GetStaticProps<{ fileContent: string }>;

export default function BlogPreviewCardPage({
  fileContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div id={blogPreviewCardUrl}>
      <h3>{blogPreviewCardUrl}</h3>
      <IFrameComponent src={blogPreviewCardMarkup} title={blogPreviewCardUrl} />
      <MarkdownRenderer fileContent={fileContent} />
    </div>
  );
}
