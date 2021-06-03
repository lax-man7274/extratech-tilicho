// const burger = document.querySelector('.burger-slide');
const navbar = document.getElementById("navbar");


window.onscroll = function () {
    myFunction()
};

console.log("navnar is", navbar);
const sticky = navbar.offsetTop;

function myFunction() {
    console.log('scrolled!!!');
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

const burger = document.querySelector('.burger');
const burgerSlide = document.querySelector('.burger-slide');
var click;
console.log(burger);
burger.addEventListener("click",()=>{
    if(click){
        burgerSlide.classList.remove('clicked');
        click=false;
    }else{
        console.log('burger clicked');
        burgerSlide.classList.add('clicked');
        click=true;
    }
   
});



