import {
  productList,
  productNew,
  productPage,
  productPhone,
  productLaptop,
  productAccessory,
  productCamera,
} from "./Data.js";

document.addEventListener("DOMContentLoaded", () => {
  // ១. បញ្ចូលរាល់ Array ទាំងអស់មកក្នុង Array តែមួយដើម្បីស្រួលស្វែងរក
  const allProducts = [
    ...productList,
    ...productNew,
    ...productPage,
    ...productPhone,
    ...productLaptop,
    ...productAccessory,
    ...productCamera,
  ];

  // ២. ទាញយក ID ពី localStorage (ប្តូរទៅជា Number ដើម្បីធៀបជាមួយ ID ក្នុង Data)
  const selectedId = Number(localStorage.getItem("selectedProductId"));

  // ៣. ចាប់យក Container សម្រាប់បង្ហាញទិន្នន័យ
  const container = document.getElementById("product-detail-container");
  if (!container) return;

  // ៤. ស្វែងរកផលិតផលតាម ID
  const product = allProducts.find((p) => p.id === selectedId);

  // ៥. លក្ខខណ្ឌត្រួតពិនិត្យ៖ បើរកឃើញឱ្យ Render បើមិនឃើញឱ្យបង្ហាញសារ Error
  if (product) {
    console.log("Viewing Product:", product.name);

    // បង្កើតរូបភាពតូចៗ (Thumbnails)
    const thumbnailsHTML = (product.thumbnails || [product.img])
      .map(
        (img) =>
          `<img src="${img}" class="w-24 h-24 object-cover rounded-xl cursor-pointer border hover:ring-2 ring-blue-500 transition" alt="thumbnail" />`,
      )
      .join("");

    // បង្កើត Features
    const featuresHTML = (
      product.features || [
        "High quality product",
        "Official Warranty",
        "Best Price",
      ]
    )
      .map((f) => `<li>✔ ${f}</li>`)
      .join("");

    // បង្កើត Colors
    const defaultColors = ["black", "blue-600", "gray-400"];
    const colorsHTML = (product.colors || defaultColors)
      .map(
        (c) =>
          `<span class="w-8 h-8 rounded-full border-2 cursor-pointer" style="background-color: ${c};"></span>`,
      )
      .join("");

    // ចាក់បញ្ចូល HTML ទៅក្នុង Container
    container.innerHTML = `
      <div class="max-w-7xl mx-auto px-6 py-10">
        <div class="bg-white rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-10 p-8">
          <div class="space-y-4">
            <img id="mainImage" src="${product.img}" class="w-full h-[300px] sm:h-[450px] object-cover rounded-2xl border" alt="${product.name}" />
            <div class="flex gap-4 overflow-x-auto pb-2 py-2" id="thumbnails">${thumbnailsHTML}</div>
          </div>

          <div class="flex flex-col gap-6">
            <div>
              <h1 class="text-4xl font-bold text-gray-800">${product.name}</h1>
              <p class="text-gray-500 mt-1">Brand: ${product.brand || "Premium Brand"}</p>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-3xl font-bold text-blue-600">$${product.price}</span>
              ${product.oldPrice ? `<span class="line-through text-gray-400">$${product.oldPrice}</span>` : ""}
              <span class="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">Special Offer</span>
            </div>

            <div class="flex items-center gap-2 text-yellow-400">
              ${"★".repeat(Math.floor(product.rating || 4))} ${product.rating % 1 !== 0 ? "½" : ""}
              <span class="text-gray-500 text-sm">(${product.rating})</span>
            </div>

            <p class="text-gray-700 leading-relaxed">
              ${product.description || "Experience high performance and sleek design with the new " + product.name + ". Built for quality and durability."}
            </p>

            <ul class="space-y-2 text-gray-700 font-medium">${featuresHTML}</ul>

            <div>
              <p class="font-semibold text-gray-800 mb-2">Available Colors</p>
              <div class="flex gap-3">${colorsHTML}</div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 mt-4">
              <div class="flex items-center border rounded-xl overflow-hidden w-full sm:w-auto">
                <button onclick="this.parentNode.querySelector('input').stepDown()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200">-</button>
                <input id="quantity" type="number" value="1" min="1" class="w-16 text-center outline-none border-l border-r" />
                <button onclick="this.parentNode.querySelector('input').stepUp()" class="px-4 py-2 bg-gray-100 hover:bg-gray-200">+</button>
              </div>
              <button data-id="${product.id}" class="add-to-cart w-full sm:flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">Add to Cart</button>
              <button class="w-full sm:flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">Buy Now</button>
            </div>

            <div class="flex justify-start mt-4">
                <a href="products.html" class="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 border rounded-xl text-gray-700 hover:bg-gray-100 transition">
                 ← Back
                </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // មុខងារដូររូបភាពនៅពេលចុចលើ Thumbnail
    const mainImgElement = document.getElementById("mainImage");
    const thumbElements = document.querySelectorAll("#thumbnails img");

    thumbElements.forEach((img) => {
      img.addEventListener("click", () => {
        mainImgElement.src = img.src;
        thumbElements.forEach((i) =>
          i.classList.remove("ring-2", "ring-blue-500"),
        );
        img.classList.add("ring-2", "ring-blue-500");
      });
    });
  } else {
    // បង្ហាញ Error បើរក ID មិនឃើញក្នុង Data
    container.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-600">Product Not Found!</h2>
        <p class="text-gray-500 mt-2">The product you are looking for does not exist or has been removed.</p>
        <a href="index.html" class="text-blue-600 hover:underline mt-4 inline-block">Return Home</a>
      </div>
    `;
  }
});
