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