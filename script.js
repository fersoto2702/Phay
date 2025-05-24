const bubble = document.getElementById("bubble");

const loveMessages = [
  "Te amo Phay",
  "Mi sol",
  "Gracias por existir",
  "Eres mi todo",
  "Mi vida",
  "Contigo todo es mejor",
  "Siempre tú ❤️",
  "Mi razón de sonreír"
];

function showBubbleMessage() {
  const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  bubble.textContent = randomMessage;

  // Mostrar burbuja
  bubble.style.opacity = "1";
  bubble.style.transform = "translateX(-50%) scale(1)";

  // Ocultar después de 2.5s
  setTimeout(() => {
    bubble.style.opacity = "0";
    bubble.style.transform = "translateX(-50%) scale(0.8)";
  }, 2500);
}

showBubbleMessage();