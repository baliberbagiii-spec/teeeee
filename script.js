// Header & Footer injection
document.addEventListener("DOMContentLoaded", () => {
  const header = `
    <div class="logo">Wijaya Tour Bali</div>
    <nav>
      <a href="index.html" data-translate="menu_home">Beranda</a>
      <a href="destinations.html" data-translate="menu_dest">Destinasi</a>
      <a href="packages.html" data-translate="menu_package">Paket</a>
      <a href="about.html" data-translate="menu_about">Tentang</a>
      <a href="contact.html" data-translate="menu_contact">Kontak</a>
      <button id="lang-toggle">🌐</button>
    </nav>`;
  document.getElementById("main-header").innerHTML = header;

  const footer = `<p>&copy; 2025 Wijaya Tour Bali | All Rights Reserved</p>`;
  document.getElementById("main-footer").innerHTML = footer;

  const wa = document.createElement("a");
  wa.href = "https://wa.me/62895365282575";
  wa.className = "whatsapp-float";
  wa.innerHTML = "💬";
  wa.target = "_blank";
  document.body.appendChild(wa);

  startSlider();
  setupTranslate();
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  const destinationContainer = document.getElementById("destination-list");

  if (destinationContainer && typeof destinations !== "undefined") {
    destinationContainer.innerHTML = destinations.map(dest => `
      <div class="card">
        <img src="${dest.image}" alt="${dest.name}">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      </div>
    `).join("");
  }
});


// script.js

document.addEventListener("DOMContentLoaded", () => {
  const destinationContainer = document.getElementById("destination-list");
  const packageContainer = document.getElementById("package-list");

  // --- Render Destinations ---
  if (destinationContainer && typeof destinations !== "undefined") {
    destinationContainer.innerHTML = destinations.map(dest => `
      <div class="card">
        <img src="${dest.image}" alt="${dest.name}">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      </div>
    `).join("");
  }

  // --- Render Packages ---
  if (packageContainer && typeof packages !== "undefined") {
    packageContainer.innerHTML = packages.map(pkg => `
      <div class="card">
        <img src="${pkg.image}" alt="${pkg.title}">
        <h3>${pkg.title}</h3>
        <p>${pkg.description}</p>
        <span class="price">${pkg.price}</span>
      </div>
    `).join("");
  }
});


// Slider
function startSlider() {
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return;
  let index = 0;
  slides[index].classList.add("active");
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

// Auto Translate
const translations = {
  en: {
    menu_home: "Home", menu_dest: "Destinations", menu_package: "Packages", menu_about: "About", menu_contact: "Contact",
    hero_title1: "Discover the Beauty of Bali with Us",
    hero_text1: "Enjoy an unforgettable journey with Wijaya Tour Bali.",
    hero_title2: "Explore Culture and Nature",
    hero_text2: "From exotic beaches to charming traditional villages.",
    hero_title3: "Complete Holiday Packages",
    hero_text3: "Flexible choices for family, honeymoon, or adventure trips.",
    section_intro: "Why Choose Wijaya Tour Bali?",
    intro_text: "We offer authentic travel experiences with professional and personalized service.",
    destinations_title: "Bali Travel Destinations",
    destinations_intro: "Explore Bali's top attractions rich with natural beauty.",
    packages_title: "Tour Packages",
    packages_intro: "Choose the best tour package for your needs.",
    about_title: "About Wijaya Tour Bali",
    about_text: "We are a professional travel agency based in Bali with 10+ years of experience.",
    contact_title: "Contact Us",
    contact_text: "Wijaya Tour Bali team is ready to help you plan your dream vacation."
  },
  id: {}
};
function setupTranslate() {
  const langBtn = document.getElementById("lang-toggle");
  const userLang = localStorage.getItem("lang") || (navigator.language.startsWith("id") ? "id" : "en");
  applyLanguage(userLang);
  langBtn.addEventListener("click", () => {
    const newLang = (localStorage.getItem("lang") === "en") ? "id" : "en";
    applyLanguage(newLang);
  });
}
function applyLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    const text = translations[lang][key];
    if (text) el.textContent = text;
  });
}
