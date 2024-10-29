const container = document.querySelector(".container")
const coffees = [
    { name: "Perspiciatis", image: "images/coffee1.jpg" },
    { name: "Voluptatem", image: "images/coffee2.jpg" },
    { name: "Explicabo", image: "images/coffee3.jpg" },
    { name: "Rchitecto", image: "images/coffee4.jpg" },
    { name: " Beatae", image: "images/coffee5.jpg" },
    { name: " Vitae", image: "images/coffee6.jpg" },
    { name: "Inventore", image: "images/coffee7.jpg" },
    { name: "Veritatis", image: "images/coffee8.jpg" },
    { name: "Accusantium", image: "images/coffee9.jpg" },
]

//mirem si el serviceworker es compatible amb el navegador
if("serviceworker" in navigator) {
    //event per registrar el service worker
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}

//funcio per mostar els cafes
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, image }) => (
            output += `
                <div class="card">
                    <img class="card--avatar" src=${image} />
                    <h1 class="card--title">${name}</h1>
                    <class="card--link" href="#">Taste</a>
                </div>
            `)
    );
    //li passem la sortida al html
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);