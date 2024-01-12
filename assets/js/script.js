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
      alert("Hubo un error al enviar el formulario.");
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
