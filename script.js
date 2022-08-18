var modal = document.getElementById("modal")
var close = document.getElementById("close")
const show = document.getElementById("finished")
show.addEventListener("click", openmodal)
close.addEventListener("click", closeModal)

function openmodal() {
    modal.style.display = "block"

}

function closeModal() {
    modal.style.display = "none"
}
const box = document.querySelector("#box")
const box2 = document.querySelector("#box2")
const card = document.getElementById("card")
let books = []
let shoppingcart = []
window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then(response => response.json())
        .then((data) => {
            books = data
            console.log(books)
            displaybooks(books)

        })
}

function displaybooks() {
    const row = document.querySelector(".row")
    books.forEach((book) => {
        row.innerHTML += ` 
                <div class="col-12 col-md-3 d-flex mt-4 "> <div class="card" style="width: 12rem;" id="card">
                <img src="${book.img}" class="card-img-top" alt="..." style="height: 15rem; >
                <div class="card-body" >
               <h6 class="card-title" style="text-align:center;margin-top:10px;color:white">price ${book.price}$</h6>
             <div class="col-12 d-flex mt-4" >
            <h6 style="padding-left:10px;font-size:15px;color:blue" onClick="removebook(event)"><i class="fa-solid fa-trash"></i><h6> 
            <h6 style="padding-left:90px;font-size:15px;color:rgb(249, 225, 10);font-weight:bold" onClick="addbook('${book.title}')"><i class="fa-solid fa-cart-plus"></i></h6>
      
              </div> </div>
               </div> </div>`


    })
};

var totalprice = 0
var addscore = 0

function addbook(data) {
    console.log(data)
        //const found = array1.find(element => element.element); the way to find forst element of array
    const book = books.find((book) => book.title == data)
        /*   shoppingcart.push(book)
          console.log(shoppingcart)
          shoppingcartlist() */
    box.innerHTML += `
        <div> <div class="card" style="width: 5rem;margin-left:10px" id="card2">
            <img src="${book.img}" class="card-img-top" alt="...">
                <div class="card-body">
        <p style="color:black;font-size:8px">${book.price}</p>
        <p style="color:blue" onClick="removecart(event)"><i class="fa-solid fa-trash"></i></p>

</div>`
    const additem = document.getElementById("add-item")


    let item = event.target.closest(".card")
    item.style.background = "rgb(158, 65, 94)"
    totalprice += book.price
    addscore += 1
    additem.innerHTML = addscore
    box2.innerHTML = "total price:" + " " + totalprice

}

function removebook(event) {
    const card1 = event.target.closest(".card")
    card1.remove()
}

function removecart(event, data) {

    const card2 = event.target.closest("#card2")
    card2.remove()

    totalprice -= book.price
    addscore--
    additem.innerHTML = addscore
    box2.innerHTML = totalprice

    addbook()
}