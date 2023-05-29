//1
const botonChangeTheme = document.getElementById("boton-change-theme");

//2
const body = document.querySelector("body");

//3
const imagemBotonChangeTheme = document.querySelector(".boton-change-theme")


//4
botonChangeTheme.addEventListener("click", () => {
    body.classList.add("modo-escuro");

    imagemBotonChangeTheme.setAttribute("./src/imagens/moon.png")

    if(body.classList.contains("modo-escuro")) {
        console.log("modo escuro está ativo");
    }
});

