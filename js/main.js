import {tost} from './func_tostar.js'

/* document.addEventListener("DOMContentLoaded", function () {
  const headerPlaceholder = document.getElementById("header-placeholder");
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      headerPlaceholder.innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
}); */

let menu = document.querySelector('.navbar .menu .categories')
let addressMenu = document.querySelector('.navbar .Address-Menu')

menu.addEventListener('click', ()=>{
  if(addressMenu.classList.contains('dis-menu')){
    addressMenu.classList.replace('dis-menu','d-none')
  }else{
    addressMenu.classList.add('dis-menu')
  }
})

/* ************************************************************ */
let featured_btn = document.querySelector(`.featured-btn`);
let onSale_btn = document.querySelector(`.onSale-btn`);
let bestRated_btn = document.querySelector(`.bestRated-btn`);

featured_btn.addEventListener('click', function () {
    if (document.querySelector(`.cards .feature-list`).classList.contains('d-none')) {
        document.querySelector(`.cards .feature-list`).classList.replace('d-none', 'd-flex');
        document.querySelector(`.cards .onSale-list`).classList.replace('d-flex', 'd-none');
        document.querySelector(`.cards .bestRated-list`).classList.replace('d-flex', 'd-none');
        featured_btn.classList.replace('notActive-btn', 'active-btn');
        onSale_btn.classList.replace('active-btn', 'notActive-btn');
        bestRated_btn.classList.replace('active-btn', 'notActive-btn');
    }
});
onSale_btn.addEventListener('click', function () {
    if (document.querySelector(`.cards .onSale-list`).classList.contains('d-none')) {
        document.querySelector(`.cards .onSale-list`).classList.replace('d-none', 'd-flex');
        document.querySelector(`.cards .feature-list`).classList.replace('d-flex', 'd-none');
        document.querySelector(`.cards .bestRated-list`).classList.replace('d-flex', 'd-none');
        onSale_btn.classList.replace('notActive-btn', 'active-btn');
        featured_btn.classList.replace('active-btn', 'notActive-btn');
        bestRated_btn.classList.replace('active-btn', 'notActive-btn');
    }
    
});
bestRated_btn.addEventListener('click', function () {
    if (document.querySelector(`.cards .bestRated-list`).classList.contains('d-none')) {
        document.querySelector(`.cards .bestRated-list`).classList.replace('d-none', 'd-flex');
        document.querySelector(`.cards .onSale-list`).classList.replace('d-flex', 'd-none');
        document.querySelector(`.cards .feature-list`).classList.replace('d-flex', 'd-none');
        bestRated_btn.classList.replace('notActive-btn', 'active-btn');
        featured_btn.classList.replace('active-btn', 'notActive-btn');
        onSale_btn.classList.replace('active-btn', 'notActive-btn');
    }
    
});


let featured_btnNew = document.querySelector(`.newArrival .featured-btn`);
let onSale_btnNew = document.querySelector(`.newArrival .onSale-btn`);
let bestRated_btnNew = document.querySelector(`.newArrival .bestRated-btn`);

featured_btnNew.addEventListener('click', function () {
    if (document.querySelector(`.newArrival .cards .feature-list`).classList.contains('d-none')) {
        document.querySelector(`.newArrival .cards .feature-list`).classList.replace('d-none', 'd-flex');
        document.querySelector(`.newArrival .cards .onSale-list`).classList.replace('d-flex', 'd-none');
        document.querySelector(`.newArrival .cards .bestRated-list`).classList.replace('d-flex', 'd-none');
        featured_btnNew.classList.replace('notActive-btn', 'active-btn');
        onSale_btnNew.classList.replace('active-btn', 'notActive-btn');
        bestRated_btnNew.classList.replace('active-btn', 'notActive-btn');
    }
    
});
onSale_btnNew.addEventListener('click', function () {
    if (document.querySelector(`.newArrival .cards .onSale-list`).classList.contains('d-none')) {
        document.querySelector(`.newArrival .cards .onSale-list`).classList.replace('d-none', 'd-flex');
        document.querySelector(`.newArrival .cards .feature-list`).classList.replace('d-flex', 'd-none');
        document.querySelector(`.newArrival .cards .bestRated-list`).classList.replace('d-flex', 'd-none');
        onSale_btnNew.classList.replace('notActive-btn', 'active-btn');
        featured_btnNew.classList.replace('active-btn', 'notActive-btn');
        bestRated_btnNew.classList.replace('active-btn', 'notActive-btn');
    }
    
});
bestRated_btnNew.addEventListener('click', function () {
    if (document.querySelector(`.newArrival .cards .bestRated-list`).classList.contains('d-none')) {
        document.querySelector(`.newArrival .cards .bestRated-list`).classList.replace('d-none', 'd-flex');
        document.querySelector(`.newArrival .cards .onSale-list`).classList.replace('d-flex', 'd-none');
        document.querySelector(`.newArrival .cards .feature-list`).classList.replace('d-flex', 'd-none');
        bestRated_btnNew.classList.replace('notActive-btn', 'active-btn');
        featured_btnNew.classList.replace('active-btn', 'notActive-btn');
        onSale_btnNew.classList.replace('active-btn', 'notActive-btn');
    }
    
});


let nextBtnTrend = document.querySelector(".next-trend-btn");
let pervBtnTrend = document.querySelector(".perv-trend-btn");
let trends = document.querySelector(".trend-flex");

let x = 0;

nextBtnTrend.addEventListener("click", () => {
  const containerWidth = trends.parentElement.clientWidth; // عرض الحاوية
  const trendsWidth = trends.scrollWidth; // العرض الكلي للمحتوى القابل للتمرير
  const maxOffset = trendsWidth - containerWidth; // الحد الأقصى للإزاحة

  x += 100;

  if (x > maxOffset) {
    x = maxOffset; // منع الإزاحة الزائدة
  }

  trends.style.transform = `translateX(${-x}px)`;
});

pervBtnTrend.addEventListener("click", () => {
  x -= 100;

  if (x < 0) {
    x = 0; // منع الإزاحة السلبية
  }

  trends.style.transform = `translateX(${-x}px)`;
});

//*************************************************************************
let numOfCartItems;
let totalPriceOfCart;

let numOfCart = document.querySelector('header .wish-cart .cart .num-cart')
let PriceOfCart = document.querySelector('header .wish-cart .cart .cart-price span')
console.log(totalPriceOfCart);

async function getnumOfCartItems() {
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  let result = await res.json();
  numOfCartItems = result.numOfCartItems.toString();
  totalPriceOfCart = result.data.totalCartPrice.toString();
  console.log("numOfCartItems",numOfCartItems);
  console.log(numOfCart);
  if(numOfCart){
    numOfCart.innerHTML = `${numOfCartItems}`
    PriceOfCart.innerHTML = `$ ${totalPriceOfCart}`
  }else{
    numOfCart.innerHTML = '0'
    PriceOfCart.innerHTML = '0'
  }
}



let Products = [];
async function getAllProducts() {
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  let result = await res.json();
  Products = result.data;
  
  disProducts();
}
getAllProducts();

function disProducts() {
  let homeDis = ``
  let featureList = ``;
  let onSaleList = ``;
  let superCon = ``;
  let bestRatedList = ``;
  let catgs = ``;
  let ads = ``;
  let trend = ``;
  getnumOfCartItems()
  getnumOfWishlistItems();
  homeDis += `
        <div class="home-text">
          <h1>${Products[20].title.split(" ",2).join(" ")}</h1>
          <del>$${Products[20].price}</del>
          <span class="span-price">$${Products[20].price - 200}</span>
          <h6>${Products[20].category.name}</h6>
          <button onclick="addToCart('${Products[20]._id}')">Shop Now</button>
        </div>
        <div class="img-con">
            <img src="${Products[20].imageCover}" alt="${Products[20].title}"/>
        </div>
    
    `;
  
  for (let i = 0; i < 8; i++) {
    featureList += `
    
        <div class="item">
          <div class="item-img-con">
            <img src="${Products[i].imageCover}" alt="${Products[i].title}"/>
          </div>
          <div class="item-text-con">
            <span>$ ${Products[i].price}</span>
              <span class="small">${Products[i].category.name}</span>
              <a href=""><h6>${Products[i].title.split(" ",2).join(" ")}</h6></a>
          </div>
          <button class="btn-add" onclick="addToCart('${Products[i]._id}')">Add Cart</button>
        </div>
     
     `;
  }
  for (let i = 19; i < 25; i++) {
    onSaleList += `
     
    <div class="item">
          <div class="item-img-con">
            <img src="${Products[i].imageCover}" alt="${Products[i].title}"/>
          </div>
          <div class="item-text-con">
            <span>$${Products[i].price}</span>
              <span class="small">${Products[i].category.name}</span>
              <a href=""><h6>${Products[i].title.split(" ",2).join(" ")}</h6></a>
          </div>
          <button class="btn-add" onclick="addToCart('${Products[i]._id}')">Add Cart</button>
    </div>
    
    `;
  }
  for (let i = 29; i < 35; i++) {
    bestRatedList += `
    
    <div class="item">
          <div class="item-img-con">
            <img src="${Products[i].imageCover}" alt="${Products[i].title}"/>
          </div>
          <div class="item-text-con">
            <span>$${Products[i].price}</span>
              <span class="small">${Products[i].category.name}</span>
              <a href=""><h6>${Products[i].title.split(" ",2).join(" ")}</h6></a>
          </div>
          <button class="btn-add" onclick="addToCart('${Products[i]._id}')">Add Cart</button>
    </div>
    
    `;
  }
  for (let i = 12; i < 15; i++) {
    if(i==12){
      superCon += `
    
      <div class="carousel-item active">
        <img src="${Products[i].imageCover}" class="d-block w-100" alt="${Products[i].title}">
        <div class="img-info">
              <div class="name-price d-flex justify-content-between align-items-center">
                  <div class="pro-name">
                      <span>${Products[i].title.split(" ",2).join(" ")}</span>
                      <h4>${Products[i].brand.name}</h4>
                  </div>
                  <div class="pro-price">
                      <del>"$ ${Products[i].price}"</del>
                      <h4>"$ ${Products[i].price - 500}"</h4>
                  </div>
              </div>
              <div class="ava-num">
                  <div class="available d-flex justify-content-between align-items-center">
                      <p>Available: <span>${Products[i].quantity}</span></p>
                      <p>Already Sold: <span>${Products[i].sold}</span></p>
                  </div>
                  <div class="available-num">
                      <div></div>
                  </div>
              </div>
              <div class="offers-con">
                  <div class="offers-end">
                      <h5>Harry Up</h5>
                      <span>offers ends in:</span>
                  </div>
                  <div class="offers">
                      <p>This Offers Ends</p>
                  </div>
              </div>
          </div>
      </div>


        
    `;
    }else{
      superCon += `
    
      <div class="carousel-item">
        <img src="${Products[i].imageCover}" class="d-block w-100" alt="${Products[i].title}">
        <div class="img-info">
              <div class="name-price d-flex justify-content-between align-items-center">
                  <div class="pro-name">
                      <span>${Products[i].title.split(" ",2).join(" ")}</span>
                      <h4>${Products[i].brand.name}</h4>
                  </div>
                  <div class="pro-price">
                      <del>"$ ${Products[i].price}"</del>
                      <h4>"$ ${Products[i].price - 500}"</h4>
                  </div>
              </div>
              <div class="ava-num">
                  <div class="available d-flex justify-content-between align-items-center">
                      <p>Available: <span>${Products[i].quantity}</span></p>
                      <p>Already Sold: <span>${Products[i].sold}</span></p>
                  </div>
                  <div class="available-num">
                      <div></div>
                  </div>
              </div>
              <div class="offers-con">
                  <div class="offers-end">
                      <h5>Harry Up</h5>
                      <span>offers ends in:</span>
                  </div>
                  <div class="offers">
                      <p>This Offers Ends</p>
                  </div>
              </div>
          </div>
      </div>


        
    `;
    }
    
  }

  for (let i = 35; i < 40; i++) {
    catgs += `
    
    <div class="cat d-flex flex-column text-center justify-content-center align-items-center">
        <img src="${Products[i].imageCover}" alt="${Products[i].title}"/>
        <p class="text-secondary">${Products[i].title.split(" ",2).join(" ")}</p>
    </div>
    
    `;
  }

  for (let i = 5; i < 8; i++) {
    if(i==5){
      ads += `
    
    <div class="carousel-item active" data-bs-interval="3000">
      <div
      class="d-flex flex-column flex-md-row justify-content-between gap-5 align-items-center py-lg-4 py-2"
      >
      <div class="text-ad">
          <span class="small text-secondary">${Products[i].category.name}</span>
          <h4>${Products[i].title.split(" ",2).join(" ")}</h4>
          <p class="mb-3">
          ${Products[i].description}
          </p>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <button class="btn-cta mt-4 d-block" onclick="addToCart('${Products[i]._id}')">Explore</button>
      </div>
      <div class="img-ad d-flex">
          <img src="${Products[i].imageCover}" alt="${Products[i].title}"/>
      </div>
      </div>
  </div>
    
    `;
    }else{
      ads += `
    
    <div class="carousel-item" data-bs-interval="3000">
      <div
      class="d-flex flex-column flex-md-row justify-content-between gap-5 align-items-center py-lg-4 py-2"
      >
      <div class="text-ad">
          <span class="small text-secondary">${Products[i].category.name}</span>
          <h4>${Products[i].title.split(" ",2).join(" ")}</h4>
          <p class="mb-3">
          ${Products[i].description}
          </p>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <span><i class="fa-solid fa-star text-warning"></i></span>
          <button class="btn-cta mt-4 d-block" onclick="addToCart('${Products[i]._id}')">Explore</button>
      </div>
      <div class="img-ad d-flex">
          <img src="${Products[i].imageCover}" alt="${Products[i].title}"/>
      </div>
      </div>
  </div>
    
    `;
    }
    
  }

  for (let i = 18; i < 25; i++) {
    trend += `
    
      <div class="trend p-4 rounded-3 bg-white position-relative">
        <div class="new"></div>
        <button class="fav" onclick="addToWishlist('${Products[i]._id}')" ><i class="fa-solid fa-heart"></i></button>
        <img src="${Products[i].imageCover}" alt="${Products[i].title}
        class="w-75 m-auto d-block mb-3"
        />
        <span class="small text-secondary">${Products[i].category.name}</span>
        <div class="d-flex justify-content-between gap-3">
        <h6 class="fw-normal">${Products[i].title.split(" ",2).join(" ")}</h6>
        <h6 class="fw-normal">$${Products[i].price}</h6>
        </div>
      </div>
    `;
  }

  document.querySelector(".home .container").innerHTML = homeDis;
  document.querySelector(".super-deals .carousel .carousel-inner").innerHTML = superCon;
  document.querySelector(".super-deals .cards .feature-list").innerHTML = featureList;
  document.querySelector(".super-deals .cards .onSale-list").innerHTML = onSaleList;
  document.querySelector(".super-deals .cards .bestRated-list").innerHTML = bestRatedList;
  document.querySelector(".popCategories .catgs").innerHTML = catgs;
  document.querySelector(".ads-sec .carousel-inner").innerHTML = ads;
  document.querySelector(".newArrival .carousel .carousel-inner").innerHTML = superCon;
  document.querySelector(".newArrival .cards .feature-list").innerHTML = featureList;
  document.querySelector(".newArrival .cards .onSale-list").innerHTML = onSaleList;
  document.querySelector(".newArrival .cards .bestRated-list").innerHTML = bestRatedList;
  document.querySelector(".trends .trends-container .trend-flex").innerHTML = trend;
}


async function addToCart(prId){
  let data ={
    productId:prId,
  }
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "token":localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
  let result = await res.json();
  tost(result);
  getnumOfCartItems()

}

async function addToWishlist(prId){
  let data ={
    productId:prId,
  }
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "token":localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
  let result = await res.json();
  console.log(result);
  tost(result);
  getnumOfWishlistItems();
}

let numOfWishlistItems;

let numOfWishlist = document.querySelector('header .wish-cart .wish-list .num-wish')


async function getnumOfWishlistItems() {
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  let result = await res.json();
  numOfWishlistItems = result.count.toString();
  console.log("numOfWishlistItems",numOfWishlistItems);
  console.log(numOfWishlist);
  if(numOfWishlist){
    numOfWishlist.innerHTML = `${numOfWishlistItems}`
  }
}



// Expose functions to the global scope
window.addToWishlist = addToWishlist;
window.addToCart = addToCart;


