gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline({
    scrollTrigger:{
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        ease: "linear"
    }
})

tl.to('.acordion .text', {
    height: 0,
    paddingBottom: 0,
    opacity: 0,
    stagger: .5
})
tl.to('.acordion',{
    marginBottom: -15,
    stagger: .5
},"<")