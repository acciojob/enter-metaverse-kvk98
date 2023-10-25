// //your JS code here. If required.
// function enter() {
// 	let p = document.getElementById("status");
// 	// let pText = p.innerText;
// 	let h1 = document.createElement("h1");
// 	h1.innerText = 'Entered Metaverse';
// 	p.remove();
// 	let body = document.querySelector("body");
// 	body.appendChild(h1);
// }
// // let btn = document.getElementById("enterBtn");
// // btn.addEventListener("click", enter());

// Get references to the HTML elements
const statusElement = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

// Add a click event listener to the button
enterBtn.addEventListener("click", function () {
    // Change the text in the status element
    statusElement.textContent = "Entered Metaverse";
    
    // Create an h1 element and set its text
    const h1Element = document.createElement("h1");
    h1Element.textContent = statusElement.textContent;
    
    // Get a reference to the message container div and append the h1 element to it
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.appendChild(h1Element);
});
