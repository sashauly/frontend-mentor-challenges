import IFrameComponent from "@/components/IFrameComponent";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs";
import path from "path";

export const qrCodeComponentUrl = "qr-code-component";
const qrCodeComponentMarkup = `/${qrCodeComponentUrl}/index.html`;
const qrCodeComponentMarkdown = `/${qrCodeComponentUrl}/README.md`;

const filePath = path.join(process.cwd(), "/public", qrCodeComponentMarkdown);

export const getStaticProps: GetStaticProps = (async () => {
  const fileContent = await fs.readFileSync(filePath, "utf8");
  return { props: { fileContent } };
}) satisfies GetStaticProps<{ fileContent: string }>;

export default function QrCodeComponentPage({
  fileContent,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div id={qrCodeComponentUrl}>
      <h3>{qrCodeComponentUrl}</h3>
      <IFrameComponent src={qrCodeComponentMarkup} title={qrCodeComponentUrl} />
      <MarkdownRenderer fileContent={fileContent} />
    </div>
  );
}
