// Header section

let onlineControlR = document.querySelectorAll('.online-control-medium-right-top .online-control-medium-right-top__item');
let onlineControlRbtn = document.querySelector('body > section.online-control-wrapper > div > div.online-control-medium-wrapper > div.online-control-medium-right > div:nth-child(3)');
let onlineControlLbtn = document.querySelector('.online-control-medium-right-img_click2');

let slidesImg = document.querySelectorAll('.online-control-medium-right-img img');
let arrowsItem = document.querySelectorAll('.online-control-medium-left-arrows__item');
let arrowsLeft = document.querySelector('.online-control-medium-left-arrows__item_left');
let arrowsRight = document.querySelector('.online-control-medium-left-arrows__item_right');
let arrowsItem0= Array.prototype.slice.call((arrowsItem),0,3);



onlineControlRbtn.addEventListener('click', function() {
	
    changeControlTop(currentItem+1);
    
});
onlineControlLbtn.addEventListener('click', function() {
	
    changeControlTop(currentItem-1);
    
});

arrowsRight.addEventListener('click', function() {
	
    changeArrow(arrowItem+1);
    
});
arrowsLeft.addEventListener('click', function() {
	
    changeArrow(arrowItem-1);
    
});

let currentItem = 0;

function changeControlTop(n) {
    slidesImg[currentItem].style.zIndex='0';

    onlineControlR[currentItem].className =" online-control-medium-right-top__item";
    currentItem=(n+onlineControlR.length)%onlineControlR.length;

    slidesImg[currentItem].style.zIndex='2';


    onlineControlR[currentItem].className = "online-control-medium-right-top__item  online-control-medium-right-top__item_active";



}

let arrowItem = 0;

function changeArrow(n) {
    

    arrowsItem0[arrowItem].className =" online-control-medium-left-arrows__item";
    arrowItem=(n+arrowsItem0.length)%arrowsItem0.length;

   


    arrowsItem0[arrowItem].className = "online-control-medium-left-arrows__item  online-control-medium-left-arrows__item_active";



}




