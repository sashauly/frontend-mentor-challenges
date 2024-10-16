import IFrameComponent from "@/components/IFrameComponent";

export const blogPreviewCardUrl = "blog-preview-card";

export default function BlogPreviewCardPage() {
  return (
    <div id={blogPreviewCardUrl}>
      <h3>{blogPreviewCardUrl}</h3>
      <IFrameComponent
        src={`/${blogPreviewCardUrl}/index.html`}
        title={blogPreviewCardUrl}
      />
    </div>
  );
}
