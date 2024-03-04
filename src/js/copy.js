const btnCopy = document.querySelector(".copy-button");

function handleclick() {
  const textoFinal = document.querySelector(".final-text");
  const resultBoxTextArea = document.querySelector(".result-box-text-area");

  if (!textoFinal) {
    btnCopy.classList.add("active", "erro");
    setTimeout(() => {
      btnCopy.classList.add("disappear");
      setTimeout(() => {
        btnCopy.classList.remove("active", "disappear", "erro");
      }, 800);
    }, 1000);
  } else {
    navigator.clipboard.writeText(textoFinal.textContent);
    textoFinal.remove();
    btnCopy.classList.add("active");
    if (window.innerWidth <= 770) {
      btnCopy.textContent = "COPIADO";
      btnCopy.classList.add("copied");
    }
    resultBoxTextArea.innerHTML = `<i class="fa-solid fa-magnifying-glass fa-beat fa-5x"></i>
        <h2>Nenhuma mensagem encontrada</h2>
        <p>Digite um texto para criptografar ou descriptografar</p>`;
    setTimeout(() => {
      btnCopy.classList.add("disappear");
      setTimeout(() => {
        btnCopy.classList.remove("active", "disappear");
        if (window.innerWidth <= 770) {
          btnCopy.textContent = "COPIAR";
          btnCopy.classList.remove("copied");
        }
      }, 800);
    }, 1000);
  }
}

export default function copy() {
  btnCopy.addEventListener("click", handleclick);
}
