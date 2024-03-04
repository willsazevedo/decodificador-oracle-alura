const btnTheme = document.querySelector(".btn-change-theme");
const btnCopy = document.querySelector(".copy-button");

function handleclick() {
  document.documentElement.classList.toggle("dark-theme");
  btnCopy.classList.toggle("dark-theme");
}

export default function changeTheme() {
  btnTheme.addEventListener("click", handleclick);
}
