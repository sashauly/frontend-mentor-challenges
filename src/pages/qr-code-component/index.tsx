import IFrameComponent from "@/components/IFrameComponent";

export const qrCodeComponentUrl = "qr-code-component";

export default function QrCodeComponentPage() {
  return (
    <div id={qrCodeComponentUrl}>
      <h3>{qrCodeComponentUrl}</h3>
      <IFrameComponent
        src={`/${qrCodeComponentUrl}/index.html`}
        title={qrCodeComponentUrl}
      />
    </div>
  );
}
