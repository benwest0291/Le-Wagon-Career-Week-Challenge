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


  const romain = document.getElementById("#romain");
  romain.addEventListener("click", (event) => {
   img.classList.toggle("img-circle");
  });
