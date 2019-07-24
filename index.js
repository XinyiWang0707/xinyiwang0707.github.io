const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const $gallery = document.querySelector(".gallery");


images = [];

for (const number of numbers) {

    images.push(`<div class="container" id="image${number}">`)
    images.push(`<img class="picture"  src="images/${number}.jpeg">`)
    images.push(`<h2>${number}</h2>`)
    images.push(`<h3>Find your soul color</h3>`)
    images.push(`</div>`)
}



$gallery.innerHTML = images.join(' ')+$gallery.innerHTML


//const $container = document.getElementById("image${number}");





const $uplayer = document.querySelector('.overlay')

const $big = document.querySelector('.big')

const $close = document.getElementById('close')

for (const number of numbers){
    document.getElementById("image"+number).addEventListener("click", function(e) {
        $uplayer.classList.add("show")
        $big.src = `images/${number}.jpeg`
        $gallery.classList.add("blur")
    })
}

$close.addEventListener('click', function(e){
    $uplayer.classList.remove("show")
    $gallery.classList.remove("blur")
})



