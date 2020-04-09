const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};       

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation
let navItems = document.querySelectorAll('nav a');

let services = document.querySelector('a');
services.textContent = siteContent['nav']['nav-item-1'];
services.style.color= "green"

let products = navItems[1];
products.textContent = siteContent['nav']['nav-item-2'];
products.style.color= "green"

let vision = navItems[2];
vision.textContent = siteContent['nav']['nav-item-3'];
vision.style.color= "green"

let features = navItems[3];
features.textContent = siteContent['nav']['nav-item-4'];
features.style.color= "green"

let about = navItems[4];
about.textContent = siteContent['nav']['nav-item-5'];
about.style.color= "green"

let contact = navItems[5];
contact.textContent = siteContent['nav']['nav-item-6'];
contact.style.color= "green"

// CTA
let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button']

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])


// Top Content

let h4Titles = document.querySelectorAll('.main-content h4');

let mainContentText = document.querySelectorAll('.text-content p');

let featuresTitle = h4Titles[0];
featuresTitle.textContent = siteContent['main-content']['features-h4'];

let featuresText = mainContentText[0];
featuresText.textContent = siteContent['main-content']['features-content'];

let aboutTitle = h4Titles[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutText = mainContentText[1];
aboutText.textContent = siteContent['main-content']['about-content'];

// Middle Image

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Bottom Account

let servicesTitle = h4Titles[2];
servicesTitle.textContent = siteContent['main-content']['services-h4'];

let servicesText = mainContentText[2];
servicesText.textContent = siteContent['main-content']['services-content'];

let productTitle = h4Titles[3];
productTitle.textContent = siteContent['main-content']['product-h4'];

let productText = mainContentText[3];
productText.textContent = siteContent['main-content']['product-content'];

let visionTitle = h4Titles[4];
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionText = mainContentText[4];
visionText.textContent = siteContent['main-content']['vision-content'];

// Contact

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

let contactText = document.querySelectorAll('.contact p');

let address = contactText[0];
address.textContent = siteContent['contact']['address'];

let phoneNum = contactText[1];
phoneNum.textContent = siteContent['contact']['phone'];

let email = contactText[2];
email.textContent = siteContent['contact']['email'];

// Footer

let footText = document.querySelector('footer p');
footText.textContent = siteContent['footer']['copyright'];

// Change Color of Navigation
let colorNav = document.querySelectorAll('a').style.color = 'green'