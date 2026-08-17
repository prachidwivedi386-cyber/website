// ========================================
// FIRST PRODUCT SLIDER
// ========================================

const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");
const content = document.querySelector(".product-slide");

rightbtn.addEventListener("click", function () {
    content.scrollLeft += 500;
});

leftbtn.addEventListener("click", function () {
    content.scrollLeft -= 500;
});


// ========================================
// SECOND PRODUCT SLIDER
// ========================================

const leftbtn1 = document.querySelector(".btn-1b");
const rightbtn1 = document.querySelector(".btn-1a");
const content1 = document.querySelector(".product-slide-1");

rightbtn1.addEventListener("click", function () {
    content1.scrollLeft += 500;
});

leftbtn1.addEventListener("click", function () {
    content1.scrollLeft -= 500;
});


// ========================================
//THIRD PRODUCT SLIDER
// ========================================

const leftbtn2 = document.querySelector(".btn-2b");
const rightbtn2 = document.querySelector(".btn-2a");
const content2 = document.querySelector(".product-slide-2");

rightbtn2.addEventListener("click", function () {
    content2.scrollLeft += 500;
});

leftbtn2.addEventListener("click", function () {
    content2.scrollLeft -= 500;
});

// ========================================
//FOURTH PRODUCT SLIDER
// ========================================

const leftbtn3 = document.querySelector(".btn-3b");
const rightbtn3 = document.querySelector(".btn-3a");
const content3 = document.querySelector(".product-slide-3");

rightbtn3.addEventListener("click", function () {
    content3.scrollLeft += 500;
});

leftbtn3.addEventListener("click", function () {
    content3.scrollLeft -= 500;
});
const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const sidebtn = document.querySelector(".second");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const black = document.querySelector(".black");

// Open sidebar
sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    black.classList.add("active");
    closeBtn.classList.add("active");
  
});

// Close sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    black.classList.remove("active");
    closeBtn.classList.remove("active");
});

// Close when clicking overlay
black.addEventListener("click", () => {
    sidebar.classList.remove("active");
    black.classList.remove("active");
    closeBtn.classList.remove("active");
});

















