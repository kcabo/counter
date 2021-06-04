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

const buttons = document.querySelectorAll<HTMLElement>('.swiper-slide');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const valstr = button.innerHTML;
        const val  = parseInt(valstr) + 1;
        button.innerHTML = String(val);
    })
});
