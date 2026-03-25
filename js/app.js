function login() {
  window.location.href = "dashboard.html";
}

function goAddProperty() {
  window.location.href = "add-property.html";
}

// Image preview
const imageInput = document.getElementById("imageInput");
if (imageInput) {
  imageInput.addEventListener("change", function () {
    const file = this.files[0];
    const preview = document.getElementById("preview");

    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    }
  });
}
