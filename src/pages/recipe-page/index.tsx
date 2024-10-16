import IFrameComponent from "@/components/IFrameComponent";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import fs from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";

export const recipePageUrl = "recipe-page";
const recipePageMarkup = `/${recipePageUrl}/index.html`;
const recipePageMarkdown: string = `/${recipePageUrl}/README.md`;

const filePath = path.join(process.cwd(), "/public", recipePageMarkdown);

export const getStaticProps: GetStaticProps = (async () => {
  const fileContent = await fs.readFileSync(filePath, "utf8");
  return { props: { fileContent } };
}) satisfies GetStaticProps<{ fileContent: string }>;

export default function recipePage({
  fileContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div id={recipePageUrl}>
      <h3>{recipePageUrl}</h3>
      <IFrameComponent src={recipePageMarkup} title={recipePageUrl} />
      <MarkdownRenderer fileContent={fileContent} />
    </div>
  );
}
