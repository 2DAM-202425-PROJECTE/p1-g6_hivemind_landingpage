const staticDevCoffe = "dev-coffe-site-v1"

const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee1.jpg",
    "/images/coffee2.jpg",
    "/images/coffee3.jpg",
    "/images/coffee4.jpg",
    "/images/coffee5.jpg",
    "/images/coffee6.jpg",
    "/images/coffee7.jpg",
    "/images/coffee8.jpg",
    "/images/coffee9.jpg",
]
//self es el service worker, creem el listener per posar els assets a la cache
self.addEventListener("install", installEvent => {
    //utilitzem waitUntil perque tarda un temps a emmagatzemar dades a la cache al ser asincron
    installEvent.waitUntil(
        //creem la cache
        caches.open(staticDevCoffe).then(cache => {
            //afegim els assets
            cache.addAll(assets)
        })
    )
})

//creem funcio per recuperar la cache, utilitzem la funció fetch
self.addEventListener("fetch", fetchEvent => {
    //respondWith per a evitar la resposta per defecte del navegador
    fetchEvent.respondWith(
        //quan tenim la cache verficar si coincideix la cache
        caches.match(fetchEvent.request).then(res => {
            //retorna una promesa i retornem el resultat si existeix o sino tornem el fetch
            return res || fetch(fetchEvent.request)
        })
    )
})