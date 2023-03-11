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



let thisPage = 1;
let limit = 24;
let list = document.querySelectorAll(".product-content__list .product-list__item");

function loadItem(){
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
    listPage();
}
loadItem();

function listPage(){
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    // if(thisPage = count){
    //     let prevtFirst = document.createElement('li');
    //     prevtFirst.innerHTML = '<<';
    //     prevtFirst.title = 'Trang đầu';
    //     prevtFirst.style.cursor = 'pointer';
    //     prevtFirst.setAttribute('onclick', "changePage("+ (1) +")");
    //     document.querySelector('.listPage').appendChild(prevtFirst);
    // }

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerHTML = '<';
        prev.title = 'Trang trước';
        prev.style.cursor = 'pointer';
        prev.setAttribute('onclick', "changePage("+ (thisPage - 1) +")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i<=count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
            newPage.title = 'Trang ' + i;
        }
        newPage.setAttribute('onclick', "changePage("+ i +")")
        document.querySelector('.listPage').appendChild(newPage);
        newPage.style.cursor = 'pointer';
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerHTML = '>';
        next.title = 'Trang kế';
        next.style.cursor = 'pointer';
        next.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");
        document.querySelector('.listPage').appendChild(next);
    }

    if(thisPage = count-1){
        let nextLast = document.createElement('li');
        nextLast.innerHTML = '>>';
        nextLast.title = 'Trang cuối';
        nextLast.style.cursor = 'pointer';
        nextLast.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");
        document.querySelector('.listPage').appendChild(nextLast);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}



const searchProduct = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product-list__item");
    const nameProduct = storeitems.getElementsByClassName("product-name");

    for(let i = 0; i< nameProduct.length; i++){
        let match = product[i].getElementsByClassName("product-name")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}