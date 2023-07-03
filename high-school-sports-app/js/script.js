const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav div a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

document.cookie = "username=Hamza";
