document.addEventListener("DOMContentLoaded", function () {
    const applicationImages = document.querySelectorAll(".application img");
  
    applicationImages.forEach(image => {
      image.addEventListener("click", () => {
        window.open(image.src, "_blank");
      });
    });
  });
  