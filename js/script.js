window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    gsap.to(loadingScreen, { opacity: 0, duration: 1, onComplete: () => loadingScreen.style.display = 'none' });

    gsap.from('.fullscreen h1', { opacity: 0, y: 50, duration: 1, delay: 0.1 });
    gsap.from('.fullscreen p', { opacity: 0, y: 50, duration: 1.5 });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000
       
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

