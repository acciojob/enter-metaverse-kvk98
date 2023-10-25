//your JS code here. If required.
	let h1 = document.createElement("h1");
	h1.id = "status";
function enter() {
	let p = document.getElementById("status");
	// let pText = p.innerText;
	h1.innerText = 'Entered Metaverse';
	h1.id = "heading";
	p.remove();
	let body = document.querySelector("body");
	body.appendChild(h1);
}
// let btn = document.getElementById("enterBtn");
// btn.addEventListener("click", enter());

