// [+] Variables
const mainSections = $.querySelectorAll("main > section");
// [+] Intersection Observer
const observer = new IntersectionObserver(getDataToObserver, {threshold:0.5});

function getDataToObserver(targetSections){
    targetSections.forEach(section => {
        let sectionDataClass = section.target.className.split(" ")[0];
        let targetLinkItem = $.querySelector(`.header-list__link[data-id="${sectionDataClass}"]`);

        if(section.isIntersecting){
            targetLinkItem.classList.add("header-list__link--active");
        }else{
            targetLinkItem.classList.remove("header-list__link--active");
        }
    })
}

mainSections.forEach(section => {
    observer.observe(section);
})

