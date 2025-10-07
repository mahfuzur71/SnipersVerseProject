
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // ========== HERO SECTION ANIMATION ==========
  gsap.from(".heading-content h1", {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: "power4.out"
  });
  gsap.from(".heading-content h2", {
    delay: 0.3,
    duration: 1,
    y: 40,
    opacity: 0,
    ease: "power4.out"
  });
  gsap.from(".heading-content p", {
    delay: 0.6,
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power2.out"
  });
  gsap.from(".heading-content .btn", {
    delay: 0.9,
    duration: 1,
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });

  // ========== FEATURES SECTION ==========
  gsap.from(".features-section .card", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 80%"
    },
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
  });

  // ========== FINICONS SECTION ==========
  gsap.from(".finicon-card", {
    scrollTrigger: {
      trigger: ".finicons-section",
      start: "top 85%"
    },
    duration: 1,
    scale: 0.8,
    opacity: 0,
    stagger: 0.25,
    ease: "elastic.out(1, 0.75)"
  });

  // ========== PRICING SECTION ==========
  gsap.from(".pricing-card", {
    scrollTrigger: {
      trigger: ".pricing-section",
      start: "top 80%"
    },
    duration: 1.1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: "power4.out"
  });

  // ========== COMMUNITY SECTION ==========
  gsap.from(".community-card-wrapper", {
    scrollTrigger: {
      trigger: ".community-section",
      start: "top 85%"
    },
    duration: 1.2,
    y: 120,
    opacity: 0,
    ease: "power3.out"
  });
  gsap.from(".globe-image", {
    scrollTrigger: {
      trigger: ".community-section",
      start: "top 85%"
    },
    duration: 3,
    scale: 0.8,
    rotate: 45,
    opacity: 0.5,
    ease: "expo.out"
  });

  // ========== NAVBAR APPEARANCE ==========
  gsap.from(".navbar", {
    duration: 1,
    y: -80,
    opacity: 0,
    ease: "power4.out"
  });

  // ========== FREEPIC (Mascot) IMAGES ==========
  document.addEventListener("DOMContentLoaded", () => {
  // সব brand-box select করা
  const boxes = gsap.utils.toArray(".brand-box");

  // infinite loop wave animation
  gsap.to(boxes, {
    y: -20, // কতটা উপরে উঠবে
    duration: 1.2, // সময়
    ease: "power1.inOut",
    yoyo: true, // উপরে গিয়ে আবার নিচে আসবে
    repeat: -1, // infinite
    stagger: {
      each: 0.3, // একটার পর একটা delay
      yoyo: true,
      repeat: -1
    }
  });
});

  // ========== SMOOTH PARALLAX ON SCROLL ==========
  gsap.utils.toArray(".globe-container").forEach(container => {
    gsap.to(container, {
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        scrub: 1.2
      },
      y: -80,
      ease: "none"
    });
  });

