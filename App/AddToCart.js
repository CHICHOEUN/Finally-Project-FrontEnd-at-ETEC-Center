import { productPage, productPhone, productLaptop, productAccessory, productCamera, productList, productNew } from "./Data.js";

// get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");

// save cart
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// update cart count
function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCount) cartCount.textContent = total;
}

// add to cart
function addToCart(id) {
  const product =
    productPage.find(p => p.id === Number(id)) ||
    productPhone.find(p => p.id === Number(id)) ||
    productLaptop.find(p => p.id === Number(id)) ||
    productAccessory.find(p => p.id === Number(id)) ||
    productCamera.find(p => p.id === Number(id)) ||
    productList.find(p => p.id === Number(id)) ||
    productNew.find(p => p.id === Number(id));
  if (!product) return;

  Swal.fire({
    title: `Add ${product.name} to cart?`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Add",
    cancelButtonText: "Cancel",
    reverseButtons: true,
  }).then(result => {
    if (result.isConfirmed) {
      const exist = cart.find(p => p.id === product.id);
      if (exist) exist.qty++;
      else cart.push({ ...product, qty: 1 });

      saveCart();
      updateCartCount();

      Swal.fire({
        icon: "success",
        title: "Added!",
        html: `<strong>${product.name}</strong> has been added.<br>Total quantity: ${exist ? exist.qty : 1}`,
        showConfirmButton: false,
        timer: 1500,
        position: "top-end",
        toast: true,
      });
    }
  });
}

// render products (generic)
function renderProducts(container, list) {
  container.innerHTML = list.map(item => `
    <div data-id="${item.id}" class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
      <img src="${item.img}" alt="" class="h-60 w-full object-cover cursor-pointer" />
      <div class="p-5">
        <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
        <div class="flex items-center mt-2">
          <span class="text-yellow-400">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </span>
          <span class="text-sm text-gray-500 ml-2">(${item.rating})</span>
        </div>
        <p class="mt-3 text-xl font-bold text-blue-600">$${item.price}</p>
        <button data-id="${item.id}" class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  `).join("");
}

// Home page search & sort
document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("product-list");
  const containerNew = document.getElementById("product-list-new");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  if (!container) return;

  // combine all products
  let products = [...productList, ...productAccessory, ...productCamera, ...productLaptop, ...productPhone, ...productNew];

  function updateProducts() {
    let result = [...products];
    const keyword = searchInput?.value.toLowerCase().trim();

    if (keyword) result = result.filter(p => p.name.toLowerCase().includes(keyword));

    switch (sortSelect?.value) {
      case "low": result.sort((a,b) => a.price - b.price); break;
      case "high": result.sort((a,b) => b.price - a.price); break;
      case "new": result.sort((a,b) => b.id - a.id); break;
    }

    renderProducts(container, result);
    renderProducts(containerNew, result.filter(p => p.isNew)); // only new products
  }

  searchInput?.addEventListener("input", updateProducts);
  sortSelect?.addEventListener("change", updateProducts);

  // click Add to Cart button
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    addToCart(btn.dataset.id);
  });

  // click image go to detail
  document.body.addEventListener("click", (e) => {
    const img = e.target.closest(".product-card img");
    if (!img) return;
    const card = img.closest(".product-card");
    const id = Number(card.dataset.id);
    localStorage.setItem("selectedProductId", id);
    window.location.href = "product-detail.html";
  });

  // first load
  updateCartCount();
  renderProducts(container, products);
  renderProducts(containerNew, products.filter(p => p.isNew));
});
