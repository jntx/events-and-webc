document.addEventListener("DOMContentLoaded", e => {
	let stuff = document.querySelector(".stuff");

	stuff.addEventListener("input", e => {
		log(`${e.target.tagName}/${e.target.name} = ${e.target.value}`);
	}, true);
});

function log(tx) {
	let l = document.querySelector(".log");

	l.innerHTML = `[${new Date().toUTCString()}] ${tx}<br>` + l.innerHTML;
}