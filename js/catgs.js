import {tost} from './func_tostar.js'

let Products = [];

async function getAllProducts() {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
    let result = await res.json();
    Products = result.data;
    
    disProducts();
}
getAllProducts();

function disProducts(){
    let catgs = ``;
    for (let i = 0; i < Products.length; i++) {
        catgs += `
        
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
    document.querySelector(".catgs .container").innerHTML = catgs;
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

window.addToCart = addToCart;