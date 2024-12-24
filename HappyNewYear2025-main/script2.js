// Seleccionar elementos del DOM
const musicButton = document.getElementById("music-button");
const music = document.getElementById("background-music");
const volumeControl = document.getElementById("volume-control");
const volumeSlider = document.getElementById("volume-slider");

// Mostrar/ocultar el control de volumen al hacer clic en el botón
musicButton.addEventListener("click", () => {
    if (volumeControl.style.display === "none") {
        volumeControl.style.display = "block"; // Muestra la barra de volumen
    } else {
        volumeControl.style.display = "none"; // Oculta la barra de volumen
    }
});

// Ajustar el volumen con el control deslizante
volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value; // Cambia el volumen del audio
});
