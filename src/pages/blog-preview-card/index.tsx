import IFrameComponent from "@/components/IFrameComponent";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { readFileSync } from "fs";

export const blogPreviewCardUrl = "blog-preview-card";
const blogPreviewCardMarkup = `/${blogPreviewCardUrl}/index.html`;
const blogPreviewCardMarkdown: string = `/${blogPreviewCardUrl}/README.md`;

export const getServerSideProps: GetServerSideProps = (async () => {
  const fileContent = await readFileSync(
    process.cwd() + "/public" + blogPreviewCardMarkdown,
    "utf8"
  );
  return { props: { fileContent } };
}) satisfies GetServerSideProps<{ fileContent: string }>;

export default function BlogPreviewCardPage({
  fileContent,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div id={blogPreviewCardUrl}>
      <h3>{blogPreviewCardUrl}</h3>
      <IFrameComponent src={blogPreviewCardMarkup} title={blogPreviewCardUrl} />
      <MarkdownRenderer fileContent={fileContent} />
    </div>
  );
}
