// let sideBarBtn = document.querySelector("#btn");
let sideBar = document.querySelector(".sidebar");
let sideBarBtn = document.querySelector(".menu-box");
let closeBtn = document.querySelector(".closeBtn");
let hero = document.querySelector(".hero-section");
// let body = document.querySelector("body");
let arrowRight = document.querySelector(".arrowRight");
let arrowLeft = document.querySelector(".arrowLeft");
let img = document.querySelector("#img");
let items;
let currtPic = 0;

let heroPics =[
    {
    pic: 1,
        img: "hero.image2.jpg",
    },
    {
    pic: 2,
        img: "hero.image3.jpg",
    },
    {
    pic: 3,
        img: "hero.image4.jpg",
    },
    {
    pic: 4,
        img: "hero.image5.jpg",    
    },
    // {
    // pic: 4,
    //     img: "hero.image.jpg",    
    // },
]

sideBarBtn.addEventListener("click", function() {
    console.log("hello");
    sideBar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function() {
    console.log("hello");
    sideBar.classList.remove("show-sidebar");
})
// hero.addEventListener("click", function() {
//     console.log("hello");
//     sideBar.classList.remove("show-sidebar");
// })


arrowRight.addEventListener("click", function() {
    console.log(currtPic);
    showNextPic();
    nextPic();
    
    
    
})
arrowLeft.addEventListener("click", function() {
    console.log(currtPic);
    showPrevPic();
    prevPic();

})

function showNextPic(){
    items = heroPics[currtPic];
    img.src = items.img;
}

    function nextPic(){
    currtPic++;
    if(currtPic > heroPics.length -1){
        currtPic = 0;
    }

}

function showPrevPic(){
    items = heroPics[currtPic];
    img.src = items.img;
}
function prevPic(){
    currtPic--;
    if(currtPic < 0){
        currtPic = heroPics.length -1;
    }
}