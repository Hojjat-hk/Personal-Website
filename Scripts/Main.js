// [+] For All Element
const $ = document;

// [+] Functions
function removeActiveClass(targetClassName){
    if($.querySelector(`.${targetClassName}`)){
        $.querySelector(`.${targetClassName}`).classList.remove(targetClassName);
    }
}
function navigationTapsInit(targetElements, eventType, buttonActiveClass, targetSectionShowClass){
    targetElements.forEach(TargetElement => TargetElement.addEventListener(eventType, (event) => {
        if(event.target.nodeName === "LI"){
            navigationTapsInitGenerator(event.target, buttonActiveClass, targetSectionShowClass);
        }else if (event.target.parentElement.nodeName === "LI"){
            navigationTapsInitGenerator(event.target.parentElement, buttonActiveClass, targetSectionShowClass);
        }
    }));
}
function navigationTapsInitGenerator (target ,buttonActiveClass, targetSectionShowClass){
    let targetPortfolioSection = $.getElementById(target.dataset.id);

    removeActiveClass(buttonActiveClass);
    removeActiveClass(targetSectionShowClass);

    targetPortfolioSection.classList.add(targetSectionShowClass);
    target.classList.add(buttonActiveClass);
}