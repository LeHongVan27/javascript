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
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
