import IFrameComponent from "@/components/IFrameComponent";

export const socialLinksProfileUrl = "social-links-profile";

export default function SocialLinksProfilePage() {
  return (
    <div id={socialLinksProfileUrl}>
      <h3>{socialLinksProfileUrl}</h3>
      <IFrameComponent
        src={`/${socialLinksProfileUrl}/index.html`}
        title={socialLinksProfileUrl}
      />
    </div>
  );
}
