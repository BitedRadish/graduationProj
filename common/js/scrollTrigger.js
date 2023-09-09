const scrollTrigger = new ScrollTrigger.default();

scrollTrigger.add('[data-scroll]', {
    toggle: {
        class: {
            in: 'animateIn',
            out: 'animateOut'
        }
    }
});