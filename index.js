const radioMainContent = document.querySelector(".station-line");

fetch("https://teclead.de/recruiting/radios")
  .then((resp) => resp.json())
  .then((data) => {
    data.radios.map((radio) => {
      const content = `
      <div class="station-line">
       <h2 class="station-name">${radio.name}</h2>
         <img src="${radio.image}">
       <h2 class="station-name">${radio.frequency}</h2>
      </div>`;
      radioMainContent.insertAdjacentHTML("afterend", content);
    });
  });







// let headingClick = document.querySelector(".heading");
// let showStation = document.querySelector(".station-line");

// headingClick.addEventListener("click", () => {
//   console.log(showStation);
//   showStation.classList.toggle("reveal");
// });



// Button Styles!!

// let button = document.querySelectorAll('.heading');
// let msg = document.querySelectorAll(".station-line-center");
// console.log(msg);


// button.addEventListener('click', () => {
//   msg.classList.toggle('reveal');
// })
