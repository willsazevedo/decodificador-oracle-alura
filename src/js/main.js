import { handleEncrypt, handleDecrypt } from "./crypt.js";
import copy from "./copy.js";
import changeTheme from "./changeTheme.js";

const botaoEncrypt = document.querySelector(".encrypt-button");
const botaoDecrypt = document.querySelector(".decrypt-button");

botaoEncrypt.addEventListener("click", () => handleEncrypt());
botaoDecrypt.addEventListener("click", () => handleDecrypt());
copy();
changeTheme();
