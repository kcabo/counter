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
    button.addEventListener('click', (event) => {
        const valstr = button.innerHTML;
        const val  = parseInt(valstr) + 1;
        button.innerHTML = String(val);
        if (val % 10 == 0){
            paan.load();
            paan.play();
        } else {
            click.load();
            click.play();
        }
    })
});

