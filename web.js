
function openNav() {
  document.getElementById("myNav").style.width = "50%";
  document.querySelector("#my").style.display = "none";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector("#my").style.display = "block";

}

document.querySelector(".btn-primary").addEventListener("click",(e)=>{
  document.querySelector("#list").classList.toggle("togl");
})
