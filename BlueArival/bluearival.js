//BlueArival Scripts
/*
Object.prototype.text=function(txt){
this.innerHTML = txt;
};
HTMLElement.prototype.fadeout=function(opc, tras){
this.style.opacity = opc;
this.style.transition = tras;
};*/
function rippleeffects(event) {
const buttona = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(buttona.clientWidth, buttona.clientHeight);
const radius = diameter / 2;
  circle.style.width = circle.style.height = diameter+"px";
  circle.style.left = event.clientX - buttona.offsetLeft - radius+ "px";
  circle.style.top = event.clientY - buttona.offsetTop - radius+"px";
  circle.classList.add("ripple-effect-blue");
const rippleeffect = buttona.getElementsByClassName("ripple-effect-blue")[0];buttona.appendChild(circle);}
const buttonas = document.querySelectorAll(".wave-blue");
for(const buttona of buttonas) {
  buttona.addEventListener("click", rippleeffects);} 
function rippleeffectswhite(event) {
  const buttona_w = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(buttona_w.clientWidth, buttona_w.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = diameter+"px";
  circle.style.left = event.clientX - buttona_w.offsetLeft - radius+ "px";
  circle.style.top = event.clientY - buttona_w.offsetTop - radius+"px";
  circle.classList.add("ripple-effect");
  const rippleeffect = buttona_w.getElementsByClassName("ripple-effect")[0];
  buttona_w.appendChild(circle);}const buttonai = document.querySelectorAll(".wave-white");
for (const buttona_w of buttonai) {
  buttona_w.addEventListener("click", rippleeffectswhite);
} var i = 0;
function rippleeffectsblack(event) {
  const buttona_ws = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(buttona_ws.clientWidth, buttona_ws.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = diameter+"px";
  circle.style.left = event.clientX - buttona_ws.offsetLeft - radius+ "px";
  circle.style.top = event.clientY - buttona_ws.offsetTop - radius+"px";
circle.classList.add("ripple-effect-black");
const rippleeffect = buttona_ws.getElementsByClassName("ripple-effect-black")[0];
buttona_ws.appendChild(circle);}const buttonais = document.querySelectorAll(".wave-black");for (const buttona_ws of buttonais) {buttona_ws.addEventListener("click", rippleeffectsblack);} 
/*
HTMLElement.prototype.menu=function(e, f){
this.innerHTML = ' <div class="lines" ></div><div class="lines" ></div><div class="lines" ></div> ';
this.addEventListener(e, f);
};
HTMLElement.prototype.icon=function(iname){
this.classList.add(iname);
}*/
/*var navi = document.querySelector("#nav");
var sdi = document.querySelector("#slide");
nav.menu("click", function(){
sdi.classList.toggle("w-250");
});
/*
var tggth = document.querySelectorAll(".toggle-theme");

for(var i = 0 ;i < tggth.length;i++){

tggth[i].onclick=function(et){
var phg = document.querySelector("html");
phg.classList.toggle("dark-theme");
/*phg.style.background = "#222";
if(phg.style.background == "#222"){
phg.style.background = "white";
}else{
phg.style.background = "#222";
}
this.focus();
}
}/*
HTMLElement.prototype.hueColor=function(clr){
this.style.filter = "hue-rotate("+clr+"deg)";
this.style.Webkitfilter = "hue-rotate("+clr+"deg)";
this.style.Mozfilter = "hue-rotate("+clr+"deg)";
this.style.Ofilter = "hue-rotate("+clr+"deg)";
}

var mob = document.querySelector(".for-min-screen");
var des = document.querySelector(".for-max-screen");
var screenw = screen.availWidth;
var screenh = screen.availHeight;
window.onload=function(w){
if(screenw <= 450){
des.style.visibility = "hidden";

}else{
mob.style.visibility = "hidden";
}
//screen WxH

};*/
var head = document.querySelector("head");
head.innerHTML += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
