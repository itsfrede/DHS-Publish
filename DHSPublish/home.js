/*body*/
let browserZoom = document.body.style.zoom = "67%";
theHeightofhtescreen = window.screen.height;
theWidthofhtescreen = window.screen.width; 
if (theHeightofhtescreen === 1050 && theWidthofhtescreen == 1680) {
  browserZoom = document.body.style.zoom = "100%";
} else if (theHeightofhtescreen === 800 && theWidthofhtescreen == 1280) {
  browserZoom = document.body.style.zoom = "67%";
} else if (theHeightofhtescreen === 1440 && theWidthofhtescreen == 2560) {
  browserZoom = document.body.style.zoom = "100%";
}else if (theHeightofhtescreen === '' && theWidthofhtescreen === ''){
  browserZoom = document.body.style.zoom = "auto";
}

console.log("Height: ",theHeightofhtescreen);
console.log("Width: ",theWidthofhtescreen);

/*Header*/
document.getElementById('profile-picture-button').addEventListener("click", function(){
  const link = document.createElement("a");
  link.href = "profile.html";
  link.click();
});

document.getElementById('file-upload-button').addEventListener('click', function () {
document.getElementById('file-input').click();
});

/*Account*/
let account = ''; 
let profileButton = '';
if (account === true){
  profileButton = document.createElement("img");
}else if (account === false){
  profileButton = document.createElement("img");
};

/*Menu*/
document.getElementById('forms-button').addEventListener("click", function(){
const link = document.createElement("a");
link.href = "forms.html";
link.click();
})
document.getElementById('trending-button').addEventListener("click", function(){
const link = document.createElement("a");
link.href = "trending.html";
link.click();
})

/*Main*/
document.getElementById('research-paper1-file').addEventListener("click",function(){
  const link = document.createElement("a");
  link.href = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.download = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.click();
});
document.getElementById('research-paper2-file').addEventListener("click",function(){
  const link = document.createElement("a");
  link.href = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.download = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.click();
});
document.getElementById('research-paper3-file').addEventListener("click",function(){
  const link = document.createElement("a");
  link.href = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.download = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.click();
});
document.getElementById('research-paper4-file').addEventListener("click",function(){
  const link = document.createElement("a");
  link.href = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.download = "PENELITIAN KELULUSAN SEKOLAH.pdf";
  link.click();
});

