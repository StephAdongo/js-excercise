const name = document.querySelector("#username");
const email = document.querySelector("#user_email");
const greetMeButton = document.querySelector(".greet-btn");
const greetingOutput = document.querySelector(".greeting");
greetMeButton.addEventListener('click', (event) => {
    greetingOutput.innerText = `Hello ${name.value}`;
    email.innerText = ` Hello ${user_email.value}`;
})