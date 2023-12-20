const navMobile = document.querySelector(".nav--mobile");
const navMobileMenu = document.querySelector(".nav__mobile-menu");

const navMenuOpenBtn = document.querySelector(".nav__menu-icon--open");
const navMenuCloseBtn = document.querySelector(".nav__menu-icon--close");

navMenuOpenBtn.addEventListener("click", () => {
  navMobile.classList.add("show-menu");
  navMobileMenu.ariaHidden = false;
});

navMenuCloseBtn.addEventListener("click", () => {
  navMobile.classList.remove("show-menu");
  navMobileMenu.ariaHidden = true;
});
