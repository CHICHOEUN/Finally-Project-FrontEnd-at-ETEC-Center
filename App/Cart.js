const tbody = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const clearBtn = document.getElementById("clear-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  tbody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    // const price = Number(item.price);
    // const subtotal = item.price * item.qty;
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    const subtotal = price * qty;

    total += subtotal;

    tbody.innerHTML += `
            <tr class="border-b">
                <td class="p-4 flex items-center gap-4">
                  <img src="${item.img ? item.img : "./IMG/c1phone.jpg"}" 
                        class="w-20 h-20 rounded-lg object-cover" 
                        alt="${item.name}" />

                  <span class="font-medium">${item.name}</span>
                </td>
                <td class="p-4 font-semibold text-blue-600">$${Number(
                  item.price || 0,
                ).toFixed(2)}</td>
                <td class="p-2">
                  <div class="flex flex-col sm:flex-row items-center border rounded-lg w-fit">
                    <button  class=" decrease px-3 py-1 hover:bg-gray-100" data-index="${index}"  ${item.qty === 1 ? "disabled" : ""}>-</button>
                    <span class="px-4 py-1">${item.quantity}</span>
                    <button class="increase px-3 py-1 hover:bg-gray-100" data-index="${index}">+</button>
                  </div>
                </td>
                <td class="p-4 font-semibold text-blue-600">$${subtotal.toFixed(2)}</td>
                <td class="p-2">
                  <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button  class="remove px-3 py-1 text-sm border rounded-lg text-red-500 hover:bg-red-50" data-index="${index}">
                      Remove
                    </button>
                  </div>
                </td>
            </tr>
        `;
  });

  totalPrice.innerText = total.toFixed(2);

  // Save updated cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

tbody.addEventListener("click", function (e) {
  const index = e.target.dataset.index; // get the row index
  if (!index) return; // ignore clicks outside buttons

  if (e.target.classList.contains("increase")) {
    cart[index].quantity++;
  }

  if (e.target.classList.contains("decrease")) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
  }

  if (e.target.classList.contains("remove")) {
    cart.splice(index, 1);
  }

  renderCart();
});

clearBtn.onclick = function () {
  cart = [];
  renderCart();
};
renderCart();
