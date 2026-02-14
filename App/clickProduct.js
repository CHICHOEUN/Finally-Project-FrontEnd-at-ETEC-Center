const filter = document.getElementById("productFilter");

const map = {
  allProduct: "all-section",
  phone: "phone-section",
  laptop: "laptop-section",
  accessories: "accessory-section",
  camera: "camera-section"
};

filter.addEventListener("change", () => {
  const id = map[filter.value];

  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
});