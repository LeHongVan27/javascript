function upDate(previewPic) {
  console.log("Event triggered successfully!");
  console.log("Alt text: " + previewPic.alt);
  console.log("Source URL: " + previewPic.src);
  let imageDiv = document.getElementById("image");
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Thông Tin Agent.";
}
function initializeGallery() {
  console.log("Hàm khởi tạo dữ liệu đã chạy!");
  let previewImages = document.getElementsByClassName("preview");
  for (let i = 0; i < previewImages.length; i++) {
    previewImages[i].setAttribute("tabindex", "0");
  }
}
