gsap.fromTo(".logo path",
    {
    opacity: 0
}, {
    y: 16,
    duration: 2.5,
    ease: "power3.out",
    opacity: 1
})

gsap.fromTo(".menu li",
    {
    opacity: 0
}, {
    y: 16,
    duration: 2,
    ease: "power4.out",
    opacity: 1,
    stagger: 0.5
})

gsap.fromTo(".title",
    {
    opacity: 0
}, {
    y: 16,
    duration: 2,
    ease: "power4.out",
    opacity: 1,
    stagger: 0.5
})

gsap.fromTo(".topic",
    {
    opacity: 0
}, {
    y: 16,
    duration: 2,
    ease: "power4.out",
    opacity: 1,
    stagger: 0.7
})

const carousel = document.querySelector('.carousel');
const list = carousel.querySelector('.list');
const thumbs = carousel.querySelector('.thumbnail');

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let isAnimating = false;

function setActive() {
    list.querySelectorAll('.item').forEach(i => i.classList.remove('active'));
    thumbs.querySelectorAll('.item').forEach(i => i.classList.remove('active'));

    list.children[0].classList.add('active');
    thumbs.children[0].classList.add('active');
}

setActive();

function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    carousel.classList.add('next');

    setTimeout(() => {
        list.appendChild(list.firstElementChild);
        thumbs.appendChild(thumbs.firstElementChild);

        carousel.classList.remove('next');
        setActive();
        isAnimating = false;
    }, 500);
}

function prevSlide() {
    if (isAnimating) return;
    isAnimating = true;

    carousel.classList.add('prev');

    setTimeout(() => {
        list.prepend(list.lastElementChild);
        thumbs.prepend(thumbs.lastElementChild);

        carousel.classList.remove('prev');
        setActive();
        isAnimating = false;
    }, 500);
}

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;