const mobile_nav = document.querySelector(".mobile_navbar_btn");
const nav_bar = document.querySelector(".navbar");

const toggleNavBar = () => {
  nav_bar.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavBar());
