const icons = [
  "bxl-html5",
  "bxl-css3",
  "bxl-javascript",
  "bxl-nodejs",
  "bxl-vuejs",
  "bxl-postgresql",
  "bxl-mongodb",
  "bxl-typescript",
  "bxl-react",
  "bxl-git"
];

const tittle = [
  "HTML 5",
  "CSS 3",
  "Javascript",
  "Node.Js",
  "Vue.Js",
  "PostgreSQL",
  "MongoDB",
  "Typescript",
  "React",
  "Git"
];

let currentIndex = 0;
const sliderIcon = document.getElementById('slider-icon');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const titlelabel = document.getElementById('title')

function showIcon(index) {
  const iconClass = icons[index];
  const titleClass = tittle[index];
  sliderIcon.className = `bx ${iconClass}`;
  titlelabel.textContent = titleClass;
}



prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + icons.length) % icons.length;
  showIcon(currentIndex);
});


function avanzarImg() {
  setInterval(() => {
    prevButton.click();
  }, 1500);
}

avanzarImg()

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % icons.length;
  showIcon(currentIndex);
});

setInterval(miFuncion, 1500);


////////////////////////////////////

function enviarFormulario() {
  var formulario = document.getElementById("contacts");
  var formData = new FormData(formulario);

  fetch("https://formspree.io/f/xayrnwno", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("Respuesta del servidor:", response);
      alert("¡Formulario enviado con éxito!");
    })
    .catch((error) => {
      // Manejar errores aquí
      console.error("Error al enviar el formulario:", error);
      alert("¡Formulario enviado con éxito!");
    });
}
////////////////////////////////////

btnOpen.onclick = function () {
  navMenu.classList.toggle("show-menu");
};

////////////////////////////////////

var menuItems = document.querySelectorAll(".menu__link");

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
});

////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  var habilitiesContainer = document.querySelector(".habilities-container");

  habilitiesContainer.addEventListener("mouseenter", function () {
    habilitiesContainer.style.animationPlayState = "paused";
  });

  habilitiesContainer.addEventListener("mouseleave", function () {
    habilitiesContainer.style.animationPlayState = "running";
  });
});

///////////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//   var form = document.getElementById("contacts");
//   var modal = document.getElementById("myModal");
//   var span = document.getElementsByClassName("close")[0];

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Envía el formulario a Formspree
//     // Puedes agregar aquí cualquier lógica adicional que necesites para el envío del formulario

//     // Muestra el modal después de enviar el formulario
//     showModal();
//   });

//   span.onclick = function () {
//     closeModal();
//   };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       closeModal();
//     }
//   };

//   // Cierra automáticamente el modal después de 3 segundos
//   setTimeout(function () {
//     closeModal();
//   }, 3000);
// });

// function showModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "block";
// }

// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }
