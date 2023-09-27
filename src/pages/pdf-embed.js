// pages/pdf-embed.js

function PdfEmbed() {
  const scriptContent = `
      document.addEventListener("mouseup", () => {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            window.parent.postMessage({ type: "textSelected", text: selectedText }, "http://localhost:3000");
        }
    });
  `;

  return (
    <div>
      {/* Embed your PDF here. This is just an example using the <embed> tag. */}
      <embed
        src="http://localhost:3002/Lease.pdf"
        type="application/pdf"
        width="640px"
        height="740px"
      />

      <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
    </div>
  );
}

export default PdfEmbed;
