const showButton = document.getElementById("read-p");
const hiddenParagraph = document.getElementById("hidden-para");

const showButtonSec = document.getElementById("read-div");
const hiddenParagraphSec = document.getElementById("hidden-div");



showButton.addEventListener("click", () => {
  if (hiddenParagraph.style.display === "none") {
    hiddenParagraph.style.display = "block";
    showButton.textContent = "Collapse";
  } else {
    hiddenParagraph.style.display = "none";
    showButton.textContent = "Read More...";
  }
});

showButtonSec.addEventListener("click", () => {
    if (hiddenParagraphSec.style.display === "none") {
        hiddenParagraphSec.style.display = "block";
        showButtonSec.textContent = "Collapse";
    } else {
      hiddenParagraphSec.style.display = "none";
      showButtonSec.textContent = "Read More...";
    }
  });
