import IFrameComponent from "@/components/IFrameComponent";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import fs from "fs";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";

export const socialLinksProfileUrl = "social-links-profile";
const socialLinksProfileMarkup = `/${socialLinksProfileUrl}/index.html`;
const socialLinksProfileMarkdown: string = `/${socialLinksProfileUrl}/README.md`;

const filePath = path.join(
  process.cwd(),
  "/public",
  socialLinksProfileMarkdown
);

export const getStaticProps: GetStaticProps = (async () => {
  const fileContent = await fs.readFileSync(filePath, "utf8");
  return { props: { fileContent } };
}) satisfies GetStaticProps<{ fileContent: string }>;

export default function SocialLinksProfilePage({
  fileContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div id={socialLinksProfileUrl}>
      <h3>{socialLinksProfileUrl}</h3>
      <IFrameComponent
        src={socialLinksProfileMarkup}
        title={socialLinksProfileUrl}
      />
      <MarkdownRenderer fileContent={fileContent} />
    </div>
  );
}
