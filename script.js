"use strict";

const swiperReviews = document.querySelector(".swiper");
if (swiperReviews) {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const headerEl = document.querySelector(".header");
const btnEl = document.querySelector(".btn-nav");
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const links = document.querySelectorAll("a:link");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault;
    const href = link.getAttribute("href");
    // console.log(href);
    if (href === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "" && href.startsWith("")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    if (link.classList.contains("header-list-item")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

const sectionMainEl = document.querySelector(".section-main");

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    const entry_2 = entries[0];

    console.log(entries[0], entries[1]);
    if (!entry.isIntersecting)
      document.querySelector(".header").classList.add("sticky");

    if (entry.isIntersecting)
      document.querySelector(".header").classList.remove("sticky");

    if (!entry_2.isIntersecting)
      document.querySelector(".footer").classList.add("active");
    if (entry_2.isIntersecting)
      document.querySelector(".footer").classList.remove("active");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-130px",
  }
);

observer.observe(sectionMainEl);
