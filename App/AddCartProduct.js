import { productPage } from "./Data.js";
import { productPhone } from "./Data.js";
import { productLaptop } from "./Data.js";
import { productAccessory } from "./Data.js";
import { productCamera } from "./Data.js";
import { productList } from "./Data.js";
import { productNew } from "./Data.js";
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// const cartCount = document.getElementById("cart-count");

document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");
  // detail
  const quantityInput = document.getElementById("quantity");
  const addBtn = document.querySelector(".add-to-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // function updateCartCount() {
  //   const total = cart.reduce((sum, item) => sum + item.qty, 0);
  //   if (cartCount) cartCount.textContent = total;
  // }
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
    }
  }

  function addToCart(product, quantityToAdd = 1) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // const existingItem = cart.find(item => item.id === product.id);
    // if(existingItem){
    //   existingItem.quantity+=1;
    // }else{
    //   cart.push({...product,quantity:1});
    // }

    // const product =
    //   productPage.find((p) => p.id === Number(id)) ||
    //   productPhone.find((p) => p.id === Number(id)) ||
    //   productLaptop.find((p) => p.id === Number(id)) ||
    //   productAccessory.find((p) => p.id === Number(id)) ||
    //   productCamera.find((p) => p.id === Number(id)) ||
    //   productList.find((p) => p.id === Number(id)) ||
    //   productNew.find((p) => p.id === Number(id));
    // if (!product) return;

    // const exist = cart.find((p) => p.id === product.id);

    // exist ? exist.qty++ : cart.push({ ...product, qty: 1 });

    // ✅ Only show popup first
    Swal.fire({
      title: `Add ${product.name} to cart?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // Add to cart only when confirmed
        const exist = cart.find((p) => p.id === product.id);
        if (exist) {
          exist.quantity = (exist.quantity || 0) + quantityToAdd;
        } else {
          cart.push({ ...product, quantity: quantityToAdd });
        }

        saveCart();
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();

        Swal.fire({
          icon: "success",
          title: "Added!",
          html: `<strong>${product.name}</strong> has been added.<br>Total quantity: ${quantityToAdd}`,
          showConfirmButton: false,
          timer: 1500,
          position: "top-end",
          toast: true,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          icon: "info",
          title: "Cancelled",
          text: `${product.name} was not added.`,
          showConfirmButton: false,
          timer: 1200,
          position: "top-end",
          toast: true,
        });
      }
    });
    document.addEventListener("DOMContentLoaded", updateCartCount);
  }

  // click add

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;

    const productId = Number(btn.dataset.id);

    // ១. ចាប់យកចំនួនពី Input (បើសិនជាមាន)
    const quantityInput = document.getElementById("quantity");
    const selectedQuantity = quantityInput ? Number(quantityInput.value) : 1;

    // ប្រមូលទិន្នន័យពីគ្រប់ Array ទាំងអស់
    const allProducts = [
      ...productList,
      ...productPhone,
      ...productLaptop,
      ...productNew,
      ...productPage,
      ...productAccessory,
      ...productCamera,
    ];

    const foundProduct = allProducts.find((p) => p.id === productId);

    if (foundProduct) {
      // បញ្ជូនទៅកាន់ function បន្ថែមម្ដងតែ ១
      addToCart(foundProduct,selectedQuantity);
    }
  });
  document.addEventListener("DOMContentLoaded", updateCartCount);

  // go cart page
  cartIcon?.addEventListener("click", () => {
    window.location.href = "cart.html";
  });

  updateCartCount();
});
