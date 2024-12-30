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



let Products = [];

async function getProsWishlist() {
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  let result = await res.json();
  Products = result.data;
  disProducts();
}

getProsWishlist();

function disProducts() {
  let products = ``;
  for (let i = 0; i < Products.length; i++) {
    products += `
     
        <tr>
            <td> <img src="${Products[i].imageCover}" alt=""> </td>
            <td>${Products[i].title}</td>
            <td>${Products[i].price}</td>
            <td>
                <button class="btn delete" onclick="delProduct('${Products[i]._id}')"><i class="fa-solid fa-heart-crack"></i></button>
                 <button class="btn add"  onclick="addToCart('${Products[i]._id}')">Add Cart</button>
            </td>
        </tr>
     
     `;
  }

  document.querySelector("#tbody").innerHTML = products;
}

async function delProduct(prId) {
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${prId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    }
  );
  let result = await res.json();
  if(result.status=="success"){
    tost(result);
        let ids = result.data;
        let newPro = [];
        for (let i = 0; i < ids.length; i++) {
            for (let j = 0; j < Products.length; j++) {
                if(ids[i] == Products[j].id) {
                    newPro.push(Products[j]);
                }
            }
        }
        Products =  newPro;
        disProducts();
  }
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
  }

// Expose functions to the global scope
window.delProduct = delProduct;
window.addToCart = addToCart;

