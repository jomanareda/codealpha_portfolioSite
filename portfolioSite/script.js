// Scroll to Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "↑";
document.body.appendChild(scrollTopBtn);

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});
