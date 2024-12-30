import {tost} from './func_tostar.js'

let Products = [];

//********************************************************** */

let menu = document.querySelector('.navbar .menu .categories')
let addressMenu = document.querySelector('.navbar .Address-Menu')

menu.addEventListener('click', ()=>{
  if(addressMenu.classList.contains('dis-menu')){
    addressMenu.classList.replace('dis-menu','d-none')
  }else{
    addressMenu.classList.add('dis-menu')
  }
})



async function getProsCart() {
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  let result = await res.json();
    Products = result.data.products;
  console.log("Products",Products);
  
  
    disProducts();
}
//****************************************************************** */

getProsCart();

function disProducts() {
  let products = ``;
  for (let i = 0; i <Products.length ; i++) {
    products += `
    
        <tr>
            <td> <img src="${Products[i].product.imageCover}" alt=""> </td>
            <td>${Products[i].product.title}</td>
            <td>${Products[i].price}</td>
            <td>
                <button class="neg" onclick="updateProduct('${Products[i].product._id}',${Products[i].count}, '-')">-</button>
                <input class="count" type="text" value="${Products[i].count}">
                <button class="plus" onclick="updateProduct('${Products[i].product._id}',${Products[i].count}, '+')">+</button>
            </td>
            <td>${Products[i].price * Products[i].count}</td>
            <td>
                <button class="btn delete" onclick="delProduct('${Products[i].product._id}')">Delete</button>
            </td>
        </tr>
    
    `;
  }

  document.querySelector("#tbody").innerHTML = products;
}



async function delProduct(prId){
    console.log(prId);
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${prId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      let result = await res.json();
        Products = result.data.products;
        disProducts();
        tost(result);
}

window.delProduct = delProduct;



async function updateProduct(prId, num, op){
  let data
  if(op == "+"){
     data ={
      count: num + 1,
    }
  }else{
     data ={
      count: num - 1,
    }
  }
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${prId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    let result = await res.json();
    
      Products = result.data.products;
      console.log(result);
      data.count++
      disProducts();
}

window.updateProduct = updateProduct;

