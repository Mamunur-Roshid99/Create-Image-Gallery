const scriptURL =
  "https://script.google.com/macros/s/AKfycbwMAa_wdzSfHVy1Y_LgPxJX30mfE8ARrc3jZyURhudh4ILW_rWaPBD1rcium4uv7riN/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});



const button = document.querySelector("#btn");
const para = document.querySelector("#para");

button.addEventListener("click", () => {
    para.innerHTML = "Thank You Subscribing!";
    setTimeout(() => {
        para.innerHTML = "";
    }, 3000);
})