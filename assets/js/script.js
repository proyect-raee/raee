// Función para mostrar/ocultar el menú principal
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("main-nav").classList.toggle("hidden");
});

// Función para manejar los submenús en dispositivos móviles
function handleSubmenuToggle(button, submenu) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    submenu.classList.toggle("hidden");
  });

  // Cerrar el submenú si se hace clic fuera de él
  document.addEventListener("click", function (e) {
    if (!button.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.add("hidden");
    }
  });
}

const raeeButton = document.querySelector("#main-nav button");
const raeeSubmenu = document.querySelector("#main-nav ul ul");
handleSubmenuToggle(raeeButton, raeeSubmenu);

const campaignsButton = document.getElementById("campaigns-toggle");
const campaignsSubmenu = document.getElementById("campaigns-submenu");
handleSubmenuToggle(campaignsButton, campaignsSubmenu);

const institutionsButton = document.getElementById("institutions-toggle");
const institutionsSubmenu = document.getElementById("institutions-submenu");
handleSubmenuToggle(institutionsButton, institutionsSubmenu);

// Función para manejar la reproducción de audio
function handleAudioControl(playButtonId, pauseButtonId, audioId) {
  const playButton = document.getElementById(playButtonId);
  const pauseButton = document.getElementById(pauseButtonId);
  const audio = document.getElementById(audioId);

  playButton.addEventListener("click", function () {
    audio.play();
  });

  pauseButton.addEventListener("click", function () {
    audio.pause();
  });
}

handleAudioControl("play-button", "pause-button", "himno-audio");
handleAudioControl("play-button-sena", "pause-button-sena", "himno-audio-sena");

function toggleCollapse(id) {
  const content = document.getElementById(id);
  const container = content.closest("div");
  content.classList.toggle("hidden");

  if (content.classList.contains("hidden")) {
    container.style.height = "auto";
  } else {
    container.style.height = "auto";
  }
}
