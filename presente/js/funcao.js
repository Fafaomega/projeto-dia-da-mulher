const geral = document.querySelector(".geral");

function abrirCarta() {
    const envelope = document.querySelector(".envelope");
    const musica = document.querySelector("#musica");

    envelope.classList.toggle("aberto");

    if (envelope.classList.contains("aberto")){
        musica.play();
        criarCoracoes();
        criarPetalas();
        geral.classList.add("blur-ativo");
    } else {
        musica.pause();
        musica.currentTime = 0;
        geral.classList.remove("blur-ativo");
    }
}

function criarCoracoes(){
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const coracao = document.createElement("div");
            coracao.classList.add("coracao");
            coracao.innerHTML = "💜"

            coracao.style.left = Math.random() * 100 + "vw";
            coracao.style.fontSize = (20 + Math.random() * 20) + "px";

            document.body.appendChild(coracao);

            setTimeout(() => {
                coracao.remove
            }, 4000);
        }, i * 200)
    }
}

let petalasAtivas = false;

function criarPetalas() {
    if(petalasAtivas) return;

    petalasAtivas = true;

    setInterval(() => {
        const petala = document.createElement("div");
        petala.classList.add("petala");
        petala.innerHTML = "🌸";

        petala.style.left = Math.random() * 100 + "vw";
        petala.style.fontSize = (15 + Math.random() * 20) + "px";
        petala.style.animationDuration = (5 + Math.random() * 5) + "s";

        document.body.appendChild(petala);

        setTimeout(() => {
            petala.remove();
        }, 10000);
    }, 300)
}

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
})