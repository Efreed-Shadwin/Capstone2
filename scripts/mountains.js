document.addEventListener("DOMContentLoaded", e=>{
    mountainsArray.forEach(mountain => {
        const option = document.createElement("option");
        option.innerHTML = mountain.name;
        list.appendChild(option);
    });
    list.addEventListener("change", event => {
        let mountain = mountainsArray.find(m => m.name == event.target.value);
        results.innerHTML = `<h1 class="card-title">${mountain.name}</h1>`;
        results.innerHTML += `<h2 class="card-text">Elevation: ${mountain.elevation} feet</h2>`;
        results.innerHTML += `<h2 class="card-text">Effort: ${mountain.effort}</h2>`;
        results.innerHTML += `<h3 class="card-text text-center">${mountain.desc}</h3>`;
        results.innerHTML += `<img src="data/enjoy-the-outdoors/images/${mountain.img}" class="card-img-bottom" alt="${mountain.name}">`;
    });
});
