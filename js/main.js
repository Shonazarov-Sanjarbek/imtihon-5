const API__PRODUCTS = "https://fakestoreapi.com"

const openSidebar = document.querySelector(".navbar__burger")
const sidebar = document.querySelector(".navbar__sidebar")
const closeSidebar = document.querySelector(".fa-xmark")
const wrapper = document.querySelector(".products__wrapper")
const btn = document.querySelector(".product__btn")
console.log(openSidebar);
console.log(sidebar);
console.log(closeSidebar);
console.log(wrapper);
console.log(btn);
openSidebar.addEventListener("click", () => {
    sidebar.style.display = "flex"
})

closeSidebar.addEventListener("click", () => {
    sidebar.style.display = "none"
})

let perPageCount = 8
let offset = 1
let categoryValue = ""

async function fetchProduct(api, limit, category) {
    try {
        let response = await fetch(`${api}/products${category}?limit=${limit}`)
       console.log(response);
        response
                .json()
                .then((res) => createCard(res))
                .catch((err) => console.log(err))
    } catch (error) {
        console.log("error");
    }
}
fetchProduct(API__PRODUCTS, perPageCount, "")

function createCard(data) {
    while (wrapper.firstChild) {
        wrapper.firstChild.remove();
      }
      console.log(data);
    data.forEach((product) => {
        console.log(product);
        let card = document.createElement("div")
        card.classList.add("products__card")
        console.log(card);
        card.innerHTML = `
            <div class="products__img">
                <img class="card-img" src="${product.image}" alt="">
            </div>
            <div class="products__card__content">
                <span title="${product.title}">${product.title}</span>
                <p>$${product.price}</p>
            </div>
        `
        wrapper.appendChild(card)
        console.log(card);
    }
);
}

btn.addEventListener("click", ()=> {
    offset++
    fetchProduct(API__PRODUCTS, perPageCount * offset, categoryValue)
})




