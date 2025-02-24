export const downloadCVCarlos = () => {
  const pdfUrl = "/assets/CV-Carlos-Jimenez.pdf"; // ❌ Quitamos "/public"
  console.log(pdfUrl);
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV-Carlos-Jimenez.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCVSebas = () => {
  const pdfUrl = "/assets/SEBASTIAN-MATA-DESARROLLADOR.pdf"; // ❌ Quitamos "/public"
  console.log(pdfUrl);
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV-SEBASTIAN-MATA-DESARROLLADOR.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadCVJose = () => {
  const pdfUrl = "/assets/JOSE-SILVA.pdf"; // ❌ Quitamos "/public"
  console.log(pdfUrl);
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV-JOSE-SILVA.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
