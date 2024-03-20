// [+] Variables Defining
const navButton = $.querySelector(".nav-btn");
const headerMenu  = $.querySelector(".header-list");
const coverForFocus = $.querySelector(".cover-focus");
const headerLinks = $.querySelectorAll(".header-list__link");
const homeLinks = $.querySelectorAll(".home-section__btn");
// [+] Functions
function openMenuHandler(){
    navButton.classList.toggle("nav-btn--open");
    headerMenu.classList.toggle("header-list--open");
    coverForFocus.classList.toggle("cover-focus--active");
}
function clickOnLinkHandler(event){
    event.preventDefault();
    let targetSectionOffsetTop = $.querySelector(`.${this.dataset.id}`).offsetTop;

    removeActiveClass("header-list__link--active")
    this.classList.add("header-list__link--active");

    checkToCloseMenu()
    scrollToTargetSection(targetSectionOffsetTop);
}
function checkToCloseMenu(){
    if(headerMenu.classList.contains("header-list--open")){
        removeActiveClass("nav-btn--open");
        removeActiveClass("header-list--open");
        removeActiveClass("cover-focus--active");
    }
}
function scrollToTargetSection(targetSectionOffsetTop){
    window.scrollTo({
        top : targetSectionOffsetTop - 100,
        behavior:"smooth" // For Scroll By Animation
    })
}

// [+] Events
navButton.addEventListener("click", openMenuHandler);
headerLinks.forEach(link => link.addEventListener("click", clickOnLinkHandler));
homeLinks.forEach(link => link.addEventListener("click",  clickOnLinkHandler));