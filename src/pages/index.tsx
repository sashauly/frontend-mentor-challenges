import PreviewCard from "@/components/PreviewCard";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <li>
          <PreviewCard
            title="qr-code-component"
            description="qr-code-component"
            imageUrl="/qr-code-component/images/screenshot.png"
            pageUrl="/qr-code-component"
          />
        </li>
        <li>
          <PreviewCard
            title="blog-preview-card"
            description="blog-preview-card"
            imageUrl="/blog-preview-card/images/screenshot.png"
            pageUrl="/blog-preview-card"
          />
        </li>
        <li>
          <PreviewCard
            title="social-links-profile"
            description="social-links-profile"
            imageUrl="/social-links-profile/images/screenshot.png"
            pageUrl="/social-links-profile"
          />
        </li>
        <li>
          <PreviewCard
            title="recipe-page"
            description="recipe-page"
            imageUrl="/recipe-page/images/screenshot.png"
            pageUrl="/recipe-page"
          />
        </li>
      </ul>
    </div>
  );
}
