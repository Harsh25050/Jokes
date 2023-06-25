const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

let getJoke = () => {
  fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
	.then(response => response.json())
	.then(data => {
		jokeContainer.textContent = `${data.joke}`;
	});
}
	btn.addEventListener("click",getJoke);
	getJoke();
