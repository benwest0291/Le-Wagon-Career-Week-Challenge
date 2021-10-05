// const romain = document.querySelector("#romain");

// Call back Function

const images = document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
    console.log(event);
  });
});


let color = ["#5a1aaa", "#f25b54", "#67a72b", "#fc17ac","#7d573e", "#aec4c1"];

let i = 0;

document.querySelector("button").addEventListener("click", function() {
  i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
})
