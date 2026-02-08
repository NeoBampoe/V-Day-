const message = document.getElementById("message");
const btn = document.getElementById("ButtonStart");

btn.addEventListener('click', (e)=>{
	message.innerText = "The game has started";
	setTimeout(()=>message.remove(), 1000);
	console.log("Starting");
});