const display= document.querySelector("#display");
const buttons= document.querySelectorAll("button");

// Inicializa el display con "0"
display.value = "0";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            // Si el display está vacío, muestra "0"
            display.value = display.value ? eval(display.value) : "0";
        } else if (btn.id === "ac") {
            display.value = "0";
        } else if (btn.id == "de") {
            // Borra el último carácter, si queda vacío muestra "0"
            display.value = display.value.slice(0, -1) || "0";
        } else {
            // Si el display es "0", reemplaza por el nuevo valor
            display.value = display.value === "0" ? btn.id : display.value + btn.id;
        }
    });
});