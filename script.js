//your JS code here. If required.
function enter() {
	let p = document.getElementById("status");
	let pText = p.innerText;
	let h1 = document.createElement("h1");
	h1.innerText = "Entered Metaverse";
	p.remove();
	let body = document.querySelector("body");
	body.appendChild(h1);
}
// let btn = document.getElementById("enterBtn");
// btn.addEventListener("click", enter());