window.addEventListener("load", function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItem = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 0;

    nextBtn.addEventListener("click", () => {
        handleChangeSlide(1);
    })

    prevBtn.addEventListener("click", () => {
        handleChangeSlide(-1);
    });

    [...dotItem].forEach((item) => item.addEventListener("click", function(c){
        [...dotItem].forEach(d => d.classList.remove("active"));
        c.target.classList.add("active");
        const slideIndex = parseInt(c.target.dataset.index);
        index = slideIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`
    }))

    function handleChangeSlide(direction){
        if(direction == 1){
            if(index >= slidesLength - 1){
                index = slidesLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        }
        else if(direction == -1){
            if(index <= 0){
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }

        [...dotItem].forEach(d => d.classList.remove("active"));
        dotItem[index].classList.add("active");
    }
})


const siteOverlay = document.querySelector(".site-overlay");


function search(){
    const searchBtn = document.querySelector(".search-menu");
    const showSearch = document.querySelector(".site-nav");
    const closeSearchBtn = document.querySelector(".site-close-handle");
    searchBtn.addEventListener("click", function(){
        showSearch.classList.add("active");
        siteOverlay.classList.add("active");
    })

    closeSearchBtn.addEventListener("click", function(){
        showSearch.classList.remove("active");
        siteOverlay.classList.remove("active");
    })
} 
search();


function navBars(){
    const barBtn = document.querySelector(".bars-menu");
    const showBarMenu = document.querySelector(".mb-menu");

    barBtn.addEventListener("click", function(){
        showBarMenu.classList.add("active");
        siteOverlay.classList.add("active");
    })

    siteOverlay.addEventListener("click", function(){
        showBarMenu.classList.remove("active");
        siteOverlay.classList.remove("active");
    })
}

navBars();