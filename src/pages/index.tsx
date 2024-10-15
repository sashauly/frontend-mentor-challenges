import IFrameComponent from "@/components/IFrameComponent";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      <div id="qr-code-component">
        <h3>qr-code-component</h3>
        <IFrameComponent
          src="/qr-code-component/index.html"
          title="qr-code-component"
        />
      </div>
      <div id="blog-preview-card">
        <h3>blog-preview-card</h3>
        <IFrameComponent
          src="/blog-preview-card/index.html"
          title="blog-preview-card"
        />
      </div>
      <div id="social-links-profile">
        <h3>social-links-profile</h3>
        <IFrameComponent
          src="/social-links-profile/index.html"
          title="social-links-profile"
        />
      </div>
    </div>
  );
}
