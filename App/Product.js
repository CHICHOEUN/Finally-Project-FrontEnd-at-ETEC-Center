import { productPhone } from "./Data.js"; // phone page
import { productLaptop } from "./Data.js"; // laptop page
import { productNew } from "./Data.js"; // new products page
import { productPage } from "./Data.js"; // main product page
import { productAccessory } from "./Data.js";
import { productCamera } from "./Data.js"; // camera page
import { productList } from "./Data.js"; // all products

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = productList
    .map(
      (p) => `
        <div data-id="${p.id}"
            class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="${p.img}"
              alt=""
              class="h-60 w-full object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold text-gray-800">${p.name}</h3>
              <div class="flex items-center mt-2">
                <span class="text-yellow-400"
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </span>
                <span class="text-sm text-gray-500 ml-2">(${p.rating})</span>
              </div>

              <p class="mt-3 text-xl font-bold text-blue-600">$${p.price}</p>
              <button
                data-id="${p.id}"
                class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
      `,
    )
    .join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const newProductList = document.getElementById("product-list-new");
  if (!newProductList) return;
  newProductList.innerHTML = productNew
    .map(
      (n) => `
    <div data-id="${n.id}"
            class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden relative"
          >
            <span class="absolute top-1">
              <img
                src="./IMG/logo new.png"
                alt=""
                style="width: 20%; height: auto"
              />
            </span>
            <img
              src="${n.img}"
              alt=""
              class="h-60 w-full object-cover transition"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold text-gray-800">${n.name}</h3>
              <div class="flex items-center mt-2">
                  <span class="text-yellow-400"
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span class="text-sm text-gray-500 ml-2">(${n.rating})</span>
                </div>
              <p class="mt-2 text-blue-600 font-bold text-xl">$${n.price}</p>

              <div class="mt-4 flex gap-8">
                <button data-id="${n.id}"
                  class="add-to-cart flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
                <button
                  class="flex-1 border border-gray-600 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Quick View
                </button>
              </div>
            </div>
          </div>
  
  `,
    )
    .join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list-page");
  if (!container) return;

  container.innerHTML = productPage
    .map(
      (p) => `
    <div data-id="${p.id}"
              class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src="${p.img}"
                alt=""
                class="h-60 w-full object-cover"
              />
              <div class="p-5">
                <h3 class="text-lg font-semibold text-gray-800">
                  ${p.name}
                </h3>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-400"
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span class="text-sm text-gray-500 ml-2">(${p.rating})</span>
                </div>

                <p class="mt-3 text-xl font-bold text-blue-600">$${p.price}</p>
                <button data-id="${p.id}"
                  class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
  `,
    )
    .join("");
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list-phone");
  if (!container) return;
  container.innerHTML = productPhone
    .map(
      (p) => `

    <div data-id="${p.id}"
              class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src="${p.img}"
                alt=""
                class="h-60 w-full object-cover"
              />
              <div class="p-5">
                <h3 class="text-lg font-semibold text-gray-800">
                  ${p.name}
                </h3>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-400"
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span class="text-sm text-gray-500 ml-2">(${p.rating})</span>
                </div>

                <p class="mt-3 text-xl font-bold text-blue-600">$${p.price}</p>
                <button data-id="${p.id}"
                  class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
    `,
    )
    .join("");
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list-laptop");
  if (!container) return;
  container.innerHTML = productLaptop
    .map(
      (l) => `
    <div data-id="${l.id}"
              class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src="${l.img}"
                alt=""
                class="h-60 w-full object-cover"
              />
              <div class="p-5">
                <h3 class="text-lg font-semibold text-gray-800">
                  ${l.name}
                </h3>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-400"
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span class="text-sm text-gray-500 ml-2">(${l.rating})</span>
                </div>

                <p class="mt-3 text-xl font-bold text-blue-600">$${l.price}</p>
                <button data-id="${l.id}"
                  class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
  `,
    )
    .join("");
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list-accessory");
  if (!container) return;
  container.innerHTML = productAccessory
    .map(
      (a) => `

     <div data-id="${a.id}"
              class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src="${a.img}"
                alt=""
                class="h-60 w-full object-cover"
              />
              <div class="p-5">
                <h3 class="text-lg font-semibold text-gray-800">
                  ${a.name}
                </h3>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-400"
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span class="text-sm text-gray-500 ml-2">(${a.rating})</span>
                </div>

                <p class="mt-3 text-xl font-bold text-blue-600">$${a.price}</p>
                <button data-id="${a.id}"
                  class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
    

  `,
    )
    .join("");
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list-camera");
  if (!container) return;
  container.innerHTML = productCamera
    .map(
      (c) => `

     <div data-id="${c.id}"
              class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src="${c.img}"
                alt=""
                class="h-60 w-full object-cover"
              />
              <div class="p-5">
                <h3 class="text-lg font-semibold text-gray-800">
                  ${c.name}
                </h3>
                <div class="flex items-center mt-2">
                  <span class="text-yellow-400"
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i
                    ><i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </span>
                  <span class="text-sm text-gray-500 ml-2">(${c.rating})</span>
                </div>

                <p class="mt-3 text-xl font-bold text-blue-600">$${c.price}</p>
                <button data-id="${c.id}"
                  class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
    

  `,
    )
    .join("");
});
// search product and sort

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list-page");
  const sortSelect = document.getElementById("sortSelect");
  const searchInput = document.getElementById("searchInput");

  if (!container) return;

  // ✅ រួម product ទាំងអស់
  let products = [
    ...productList,
    ...productAccessory,
    ...productCamera,
    ...productLaptop,
    ...productPhone,
    ...productNew,
  ];

  function renderProducts(list) {
    container.innerHTML = list
      .map(
        (item) => `
      <div data-id="${item.id}"
      class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
      >
      <img
      src="${item.img}"
      alt=""
      class="h-60 w-full object-cover"
      />
      <div class="p-5">
      <h3 class="text-lg font-semibold text-gray-800">
      ${item.name}
      </h3>
      <div class="flex items-center mt-2">
      <span class="text-yellow-400"
      ><i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i
      ><i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      </span>
      <span class="text-sm text-gray-500 ml-2">(${item.rating})</span>
      </div>
      
      <p class="mt-3 text-xl font-bold text-blue-600">$${item.price}</p>
      <button data-id="${item.id}"
      class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
      Add to Cart
      </button>
      </div>
      </div>
    `,
      )
      .join("");
  }

  function updateProducts() {
    let result = [...products];

    const keyword = searchInput.value.toLowerCase().trim();

    // ✅ SEARCH
    if (keyword) {
      result = result.filter((p) => p.name.toLowerCase().includes(keyword));
    }

    // ✅ SORT
    switch (sortSelect.value) {
      case "low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "new":
        result.sort((a, b) => b.id - a.id);
        break;
    }

    renderProducts(result);
  }

  // ✅ VERY IMPORTANT (missing before)
  searchInput.addEventListener("input", updateProducts);
  sortSelect.addEventListener("change", updateProducts);

  // click image
 // ដាក់កូដនេះក្នុង document.addEventListener("DOMContentLoaded", ...)
document.body.addEventListener("click", (e) => {
  // ១. ឆែកថា តើអ្នកប្រើចុចលើរូបភាព ឬ ចំណងជើងផលិតផលមែនទេ?
  const target = e.target.closest(".product-card img") || e.target.closest(".product-card h3");
  
  if (target) {
    // ២. ទាញយក ID ពី card ធំ (parent)
    const card = target.closest(".product-card");
    const id = card.getAttribute("data-id");

    if (id) {
      // ៣. រក្សាទុកក្នុង localStorage និងប្តូរទំព័រ
      localStorage.setItem("selectedProductId", id);
      window.location.href = "product-detail.html";
    }
  }
});

  // first load
  renderProducts(products);
});

// product detail
document.addEventListener("DOMContentLoaded", () => {
  // const allProducts = [
  //   ...productList,
  //   ...productPhone,
  //   ...productLaptop,
  //   ...productAccessory,
  //   ...productCamera,
  //   ...productNew,
  //   ...productPage
  // ];

  /* ===== click image ===== */
/* ==========================================
   FIXED: Global Click Handler for Detail Page
   ========================================== */
/* ==========================================
   មុខងារចុចលើផលិតផលដើម្បីទៅកាន់ Detail Page
   ========================================== */
// ចាប់ Event ពេលចុចលើ Card ផលិតផល
document.addEventListener("click", (e) => {
  // ប្រសិនបើចុចលើ រូបភាព ឬ ឈ្មោះផលិតផល
  const target = e.target.closest(".product-card img, .product-card h3");
  
  if (target) {
    const card = target.closest(".product-card");
    const id = card.getAttribute("data-id");

    if (id) {
      localStorage.setItem("selectedProductId", id);
      window.location.href = "product-detail.html";
    }
  }
});

});

/* =========================
   HOME PAGE SEARCH (Featured + New)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const featuredContainer = document.getElementById("product-list");
  const newContainer = document.getElementById("product-list-new");
  const searchInput = document.getElementById("searchInput");

  if (!featuredContainer || !searchInput) return;

  const featuredProducts = [...productList];
  const newProducts = [...productNew];

  /* ---------- render featured ---------- */
  function renderFeatured(list) {
    featuredContainer.innerHTML = list
      .map(
        (p) => `
      <div data-id="${p.id}"
            class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src="${p.img}"
              alt=""
              class="h-60 w-full object-cover"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold text-gray-800">${p.name}</h3>
              <div class="flex items-center mt-2">
                <span class="text-yellow-400"
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </span>
                <span class="text-sm text-gray-500 ml-2">(${p.rating})</span>
              </div>

              <p class="mt-3 text-xl font-bold text-blue-600">$${p.price}</p>
              <button data-id="${p.id}"
                class="add-to-cart mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
    `,
      )
      .join("");
  }

  /* ---------- render new ---------- */
  function renderNew(list) {
    if (!newContainer) return;

    newContainer.innerHTML = list
      .map(
        (p) => `
      <div data-id="${p.id}"
            class="product-card bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden relative"
          >
            <span class="absolute top-1">
              <img
                src="./IMG/logo new.png"
                alt=""
                style="width: 20%; height: auto"
              />
            </span>
            <img
              src="${p.img}"
              alt=""
              class="h-60 w-full object-cover transition"
            />
            <div class="p-5">
              <h3 class="text-lg font-semibold text-gray-800">${p.name}</h3>
              <div class="flex items-center mt-2">
                <span class="text-yellow-400"
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i
                  ><i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </span>
                <span class="text-sm text-gray-500 ml-2">(${p.rating})</span>
              </div>
              <p class="mt-2 text-blue-600 font-bold text-xl">$${p.price}</p>

              <div class="mt-4 flex gap-8">
                <button data-id="${p.id}"
                  class="add-to-cart flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
                <button 
                  class="add-to-cart flex-1 border border-gray-600 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Quick View
                </button>
              </div>
            </div>
          </div>
    `,
      )
      .join("");
  }

  /* ---------- SEARCH ---------- */
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();

    const filteredFeatured = featuredProducts.filter((p) =>
      p.name.toLowerCase().includes(keyword),
    );

    const filteredNew = newProducts.filter((p) =>
      p.name.toLowerCase().includes(keyword),
    );

    renderFeatured(filteredFeatured);
    renderNew(filteredNew);
  });

  /* first load */
  renderFeatured(featuredProducts);
  renderNew(newProducts);
});
