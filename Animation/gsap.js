// Demo 
const hello = new SplitType('#Hello');
gsap.from('#Hello .char', {
    y: 50,
    stagger: 0.05,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    // repeat: -1,
    // yoyo: true,
    opacity: 0,
    scrollTrigger:{
        trigger: "#Hello .char",
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
        end: 'top 55%',
        scrub: 4
      }
    
});
const step_heading = new SplitType('#stepHeading');
gsap.from('#stepHeading .char', {
    y: 50,
    stagger: 0.05,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    // repeat: -1,
    // yoyo: true,
    opacity: 0,
    scrollTrigger:{
        trigger: "#stepHeading .char",
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
        end: 'top 55%',
        scrub: 4
    }
    
});
// wander heading
const wanderHeading = new SplitType('#wander-heading');
gsap.from('#wander-heading .char', {
    y: 50,
    stagger: 0.05,
    duration: 0.8,
    delay: 0.09,
    ease: "power3.out",
    // repeat: -1,
    // yoyo: true,
    opacity: 0
});

const trend_heading = new SplitType('#trend_heading');
gsap.from('#trend_heading .char', {
    y: -50,
    stagger: 0.05,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
    // repeat: -1,
    // yoyo: true,
    opacity: 0,
    scrollTrigger:{
        trigger: "#trend_heading .char",
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 4
    }
})

// inside step 
gsap.from('#fourSteps #one', {
    opacity: 0,
    scale: 0.95,
    ease: 'back.out(1.7)',  // Smooth pop effect
    scrollTrigger: {
        trigger: '#fourSteps #one',
        scroller: 'body',
        start: 'top 85%',  // Start the animation when the top of the element reaches 70% of the viewport height
        end: 'top 30%',    // End the animation when the top of the element reaches 30% of the viewport height
        scrub: 3,       // Smoothly animate as you scroll

    }
});
gsap.from('#fourSteps #two', {
    opacity: 0,
    scale: 0.95,
    ease: 'back.out(1.7)',  // Smooth pop effect
    scrollTrigger: {
        trigger: '#fourSteps #two',
        scroller: 'body',
        start: 'top 65%',  // Start the animation when the top of the element reaches 70% of the viewport height
        end: 'top 30%',    // End the animation when the top of the element reaches 30% of the viewport height
        scrub: 3,       // Smoothly animate as you scroll

    }
});
gsap.from('#fourSteps #three', {
    opacity: 0,
    scale: 0.95,
    ease: 'back.out(1.7)',  // Smooth pop effect
    scrollTrigger: {
        trigger: '#fourSteps #three',
        scroller: 'body',
        start: 'top 65%',  // Start the animation when the top of the element reaches 70% of the viewport height
        end: 'top 30%',    // End the animation when the top of the element reaches 30% of the viewport height
        scrub: 3,       // Smoothly animate as you scroll

    }
});
gsap.from('#fourSteps #four', {
    opacity: 0,
    scale: 0.95,
    ease: 'back.out(1.7)',  // Smooth pop effect
    scrollTrigger: {
        trigger: '#fourSteps #four',
        scroller: 'body',
        start: 'top 65%',  // Start the animation when the top of the element reaches 70% of the viewport height
        end: 'top 30%',    // End the animation when the top of the element reaches 30% of the viewport height
        scrub: 3,       // Smoothly animate as you scroll

    }
});
gsap.from('#fourSteps #five', {
    opacity: 0,
    // scale: 0.95,
    ease: 'back.out(1.7)',  // Smooth pop effect
    scrollTrigger: {
        trigger: '#fourSteps #five',
        scroller: 'body',
        start: 'top 65%',  // Start the animation when the top of the element reaches 70% of the viewport height
        end: 'top 30%',    // End the animation when the top of the element reaches 30% of the viewport height
        scrub: 3,       // Smoothly animate as you scroll

    }
});

