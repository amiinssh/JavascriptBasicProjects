const data = document.querySelector("#text");
const qrCodeImg = document.querySelector("#qrcode"); 
const generate = document.querySelector("#Generate");

generate.addEventListener("click", () => {
  const size = `350x350`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(data.value)}`;

  if (data.value === "") {
    qrCodeImg.src = "images/qrcode_tcea.org-1.png"; 
  } else {
    qrCodeImg.src = qrUrl; 
  }
});
