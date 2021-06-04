import Swiper from 'swiper/bundle';

import './style.scss';

const direction: "vertical" | "horizontal" = "vertical";
const option = {
    direction: direction,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
}

const swiper = new Swiper('.mySwiper', option);

const click = document.querySelector<HTMLAudioElement>("#click");  
const paan = document.querySelector<HTMLAudioElement>("#paan");  


const buttons = document.querySelectorAll<HTMLElement>('.swiper-slide');
buttons.forEach((button) => {
    button.addEventListener('click', countUp);
});

function countUp(event) {
    const val = parseInt(event.currentTarget.innerHTML) + 1;
    event.currentTarget.innerHTML = String(val);
    if (val % 10 == 0){
        paan.load();
        paan.play();
    } else {
        click.load();
        click.play();
    }
};

const logDiv = document.querySelector<HTMLElement>('#log');


swiper.on('slideNextTransitionEnd', () => {
    const buttons = document.querySelectorAll<HTMLElement>('.swiper-slide');
    const finishButton = buttons[swiper.activeIndex - 1];
    const count = parseInt(finishButton.innerHTML);
    const valLog = String(count) + ', ';
    logDiv.innerHTML = logDiv.innerHTML + valLog;
});

swiper.on('reachEnd', () => {
    let newSlide = document.createElement('div');
    newSlide.classList.add('swiper-slide');
    newSlide.innerHTML = '0';
    newSlide.addEventListener('click', countUp);
    swiper.appendSlide(newSlide);
});