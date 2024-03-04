function setDimension() {
  const resultBox = document.querySelector(".result-box");
  const resultContainer = document.querySelector(".result-contaienr");

  resultBox.style.maxHeight = resultContainer.offsetHeight * 0.9 + "px";
  resultBox.style.maxWidth = resultContainer.offsetWidth * 0.9 + "px";
}

export default function adjustDimensions() {
  window.onload = setDimension;
  window.onresize = setDimension;
}

export { setDimension, adjustDimensions };




