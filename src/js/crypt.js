const textarea = document.querySelector("textarea");
const resultBoxTextArea = document.querySelector(".result-box-text-area");

function encrypt(texto) {
  let novotexto = "";

  texto.split("").forEach((e) => {
    switch (e) {
      case "a":
        novotexto += "ai";
        break;
      case "e":
        novotexto += "enter";
        break;
      case "i":
        novotexto += "imes";
        break;
      case "o":
        novotexto += "ober";
        break;
      case "u":
        novotexto += "ufat";
        break;
      default:
        novotexto += e;
    }
  });

  return novotexto;
}

function decrypt(texto) {
  const charAregex = /ai/g;
  const charEregex = /enter/g;
  const charIregex = /imes/g;
  const charOregex = /ober/g;
  const charUregex = /ufat/g;
  let novotexto = texto.replace(charAregex, "a");
  novotexto = novotexto.replace(charEregex, "e");
  novotexto = novotexto.replace(charIregex, "i");
  novotexto = novotexto.replace(charOregex, "o");
  novotexto = novotexto.replace(charUregex, "u");

  return novotexto;
}

function handleEncrypt() {
  if (textarea.value === "") {
    console.log("dsadsds");
    resultBoxTextArea.innerHTML = `
     <i class="fa-solid fa-face-frown-open fa-5x" style="animation: none;"></i>
      <p class="erro-message">Texto não encontrado por favor digite algo.</p>
      `;
  } else {
    resultBoxTextArea.innerHTML = `<span class="final-text">${encrypt(
      textarea.value.toLowerCase()
    )}</span>`;
  }
}

function handleDecrypt() {
  if (textarea.value === "") {
    resultBoxTextArea.innerHTML = `
    <i class="fa-solid fa-face-frown-open fa-5x" style="animation: none;"></i>
    <p class="erro-message">Texto não encontrado por favor digite algo.</p>
    `;
  } else {
    resultBoxTextArea.innerHTML = `<span class="final-text">${decrypt(
      textarea.value.toLowerCase()
    )}</span>`;
  }
}

export { handleEncrypt, handleDecrypt };
