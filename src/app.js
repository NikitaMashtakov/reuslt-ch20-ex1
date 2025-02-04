import getRandomColor from "./utils";

export default function initApp() {
  const changeBackgroundButton = document.createElement("button");
  changeBackgroundButton.className = "button";
  changeBackgroundButton.textContent = "Изменить цвет страницы";
  document.body.append(changeBackgroundButton);

  changeBackgroundButton.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}
