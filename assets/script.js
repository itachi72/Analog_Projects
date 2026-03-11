function setActiveNav() {
  var path = window.location.pathname.toLowerCase();
  var links = document.querySelectorAll(".nav-link");
  links.forEach(function (link) {
    var href = link.getAttribute("href").toLowerCase();
    if ((path.endsWith("/") && href === "index.html") || path.endsWith(href)) {
      link.classList.add("active");
    }
  });
}

function wireImageModal() {
  var modal = document.getElementById("img-modal");
  var modalImg = document.getElementById("img-modal-content");
  if (!modal || !modalImg) {
    return;
  }

  document.querySelectorAll(".zoomable").forEach(function (img) {
    img.addEventListener("click", function () {
      modalImg.src = img.src;
      modalImg.alt = img.alt || "Project image";
      modal.classList.add("open");
    });
  });

  modal.addEventListener("click", function () {
    modal.classList.remove("open");
    modalImg.src = "";
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.classList.remove("open");
      modalImg.src = "";
    }
  });
}

setActiveNav();
wireImageModal();
