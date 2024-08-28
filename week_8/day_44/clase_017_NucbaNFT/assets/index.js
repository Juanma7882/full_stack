console.log("estamos conectados");
const productsContainer = document.querySelector(".products-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");

const cartBtn = document.querySelector(".cart-label");
const menuBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

const cartBubble = document.querySelector(".cart-bubble");
const total = document.querySelector(".total");
const buyBtn = document.querySelector(".btn-buy");
const deleteBtn = document.querySelector(".btn-delete");
const productsCart = document.querySelector(".cart-container");

let cart = [];

const createProductTemplate = (product) => {
  return `<div class="product">
    <img src="${product.cardImg}" alt="${product.name}" />
    
    <!-- contenedor para la info -->
    <div class="product-info">
      <!-- Top -->
      <div class="product-top">
        <h3>${product.name}</h3>
        <p>Current Bid</p>
      </div>
    
      <!-- mid -->
      <div class="product-mid">
        <div class="product-user">
          <img src="${product.userImg}" alt="${product.user}" />
          <p>@${product.user}</p>
        </div>
        <span>${product.bid}</span>
      </div>
    
      <!-- bot -->
      <div class="product-bot">
        <div class="offer-time">
          <img src="./assets/img/fire.png" alt="fueguito" />
          <p>05:12:07</p>
        </div>
    
        <button class="btn-add"
        data-id='${product.id}' 
        data-name='${product.name}'
        data-bid='${product.bid}' 
        data-img='${product.cardImg}'
        >Add</button>
      </div>
    </div>
    </div>`;
};

const renderProducts = (productList) => {
  console.log(productList);
  productsContainer.innerHTML += productList
    .map(createProductTemplate)
    .join("");
};

const IslastIndexOf = () => {
  return appstate.currentProductsIndex === appstate.productsLimit - 1;
};

const showMoreProducts = () => {
  appstate.currentProductsIndex += 1;
  console.log(appstate.currentProductsIndex);
  renderProducts(appstate.products[appstate.currentProductsIndex]);

  if (IslastIndexOf) {
    // console.log("estmos al final del array");
    showMoreBtn.classList.add("hidden");
  }
};

const setShowMoreVisibility = () => {
  if (!appstate.activeFilter) {
    showMoreBtn.classList.remove("hidden");
  }
  showMoreBtn.classList.add("hidden");
};

const ChangeBtnActiveState = (SelectedCategory) => {
  const categories = [...categoriesList];

  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== SelectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const changeFilterState = (btn) => {
  appstate.activeFilter = btn.dataset.category;
  ChangeBtnActiveState(appstate.activeFilter);
  setShowMoreVisibility(appstate.activeFilter);
};

const renderFilterdProducts = () => {
  const filteredProducts = productsData.filter(
    (product) => product.category === appstate.activeFilter
  );
  renderProducts(filteredProducts);
};

const applyFilter = ({ target }) => {
  // console.log(e.target);
  if (!IsInactiveFilterBtn(target)) return;
  changeFilterState(target);
  productsContainer.innerHTML = "";
  if (appstate.activeFilter) {
    renderFilterdProducts();
    appstate.currentProductsIndex = 0;
    return;
  }
  renderProducts(appstate.products[0]);
};

const IsInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (cartMenu.classList.contains("open-cart")) {
    barsMenu.classList.remove("open-menu");
    overlay.classList.add("show-overlay");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (barsMenu.classList.contains("open-menu")) {
    cartMenu.classList.remove("open-cart");
    overlay.classList.add("show-overlay");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnOVerlayClick = () => {
  if (
    barsMenu.classList.contains("open-menu") &&
    cartMenu.classList.contains("open-cart")
  ) {
    return;
  }
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg"> Agrega un Producto </p>`;
  } else {
    console.log("thanks");
    productsCart.innerHTML = `<p class="empty-msg"> Gracias por comprar </p>`;
  }
};

const addProduct = (e) => {
  console.log(e.target);
  if (!e.target.classList.contains("btn-add")) return;
  const product = e.target.dataset;
  console.log(product);
  if (IsExistCartProduct(product)) {
    addUnitToProduct(product);
  } else {
    createCartProduct(product);
  }
  console.log(cart);
  renderCart();
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartproduct) =>
    cartproduct.id === cartproduct.id
      ? { ...cartproduct, quantity: cartproduct.quantity + 1 }
      : cartproduct
  );
};

const IsExistCartProduct = (product) => {
  return cart.find((iten) => iten.id === product.id);
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const init = () => {
  renderProducts(appstate.products[0]);
  showMoreBtn.addEventListener("click", showMoreProducts);
  categoriesContainer.addEventListener("click", applyFilter);
  console.log(categoriesContainer);

  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeOnOVerlayClick);
  window.addEventListener("scroll", closeOnScroll);

  productsContainer.addEventListener("click", addProduct);
  document.addEventListener("DOMContentLoaded", renderCart);
};

init();
