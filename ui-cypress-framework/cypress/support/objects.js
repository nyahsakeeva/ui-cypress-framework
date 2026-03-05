// cypress/support/objects.js
export const loginObjects = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginBtn: '[data-test="login-button"]',
  errorMsg: '[data-test="error"]',
};

export const inventoryObjects = {
  title: '[data-test="title"]',
  burgerMenu: '#react-burger-menu-btn',
  logoutLink: '#logout_sidebar_link',
  cartLink: '[data-test="shopping-cart-link"]',
  cartBadge: '[data-test="shopping-cart-badge"]',

  // product & sorting
  inventoryItem: '[data-test="inventory-item"]',
  inventoryItemName: '[data-test="inventory-item-name"]',
  sortDropdown: '[data-test="product-sort-container"]',
  cartItem: '[data-test="inventory-item"]',
  addToCartBtnByName: (name) =>
    `[data-test="add-to-cart-${name.toLowerCase().replaceAll(" ", "-")}"]`,
  removeBtnByName: (name) =>
    `[data-test="remove-${name.toLowerCase().replaceAll(" ", "-")}"]`,
};

export const cartObjects = {
  cartItem: '[data-test="inventory-item"]',
  checkoutBtn: '[data-test="checkout"]',
  continueShoppingBtn: '[data-test="continue-shopping"]',
  removeBtn: '[data-test^="remove-"]',
};

export const checkoutObjects = {
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueBtn: '[data-test="continue"]',
  finishBtn: '[data-test="finish"]',
  completeHeader: '[data-test="complete-header"]',
};