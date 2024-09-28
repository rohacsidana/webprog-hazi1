const containerEl = document.getElementById("container");
const buttons = document.querySelectorAll(".stylishButton");
task1();
task2();

/* 2.1 **A "container" azonosítójú elemre kattintva felugró üzenetben írd ki a következőt: "You can find the clicked colors here (if you look closely)!".** (1 pont) */
function task1() {
  containerEl.addEventListener("click", () => {
    console.log("You can find the clicked colors here (if you look closely)!");
  });
}

/* 2.2 **Egy színhez tartozó gomb klikkelésekor szúrj be egy kört a "container" azonosítójú elembe.** (2 pont) */
function task2() {
  buttons.forEach((btn) => {
    const btnColor = btn.classList[0];
    btn.addEventListener("click", () => {
      const circle = document.createElement("div");

      circle.classList.add("circle");
      circle.classList.add(btnColor);
      containerEl.appendChild(circle);
      if (!localStorage.getItem("colors")) {
        localStorage.setItem("colors", btnColor);
      } else {
        localStorage.setItem(
          "colors",
          localStorage.getItem("colors") + ", " + btnColor
        );
      }

      /* 2.3 **Ha a felhasználó beszúrt körre kattint, az váltakozzon négyzet és kör között.** (1 pont) */
      circle.addEventListener("click", (e) => {
        circle.classList.toggle("circle");
        circle.classList.toggle("rectangle");
        e.stopPropagation();
      });
    });
  });
}
