gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

 
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      out_mode: "bounce"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 100
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

tl.to(".ball", {
  y: -100,
  duration: 0.7,
  ease: "bounce.out"
})
  .to(".ball", {
    scale: 30,
    duration: 1,
    ease: "power2.inOut"
  })
  .to(".intro", {
    backgroundColor: "white",
    duration: 0.5
  }, "-=0.8")
  .to(".ball", {
    opacity: 0,
    duration: 0.3
  })
  .to('.ball', {
    display: 'none'  // ✅ corrected
  })
  .from('nav', {
    opacity: 0,
    duration: 0.5,
  })
  .from('.char', {
    opacity: 0,
    duration: 1
  })
  .from('.blob', {
    ease: "bounce.out",
    scale: 0.1,
    duration: 1,
    opacity: 0
  })
  .from('.r h1 , .r h2', {
    x: 200,
    stagger: 1,
    opacity: 0,
    duration: 0.2,
    delay: 0.2
  })
  .from('.r button', {
    opacity: 0,
    duration: 0.2,
    delay: 0.2
  });

// ✅ Swiper initialized after DOM load
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'cube',
    cubeEffect: {
      shadow: true,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  });
});
 
// gsap.to(".circle", {
//   scrollTrigger: {
//     trigger: ".circle",
//     scroller: ".home", // change to 'body' if not using a custom scroll container
//     markers: true,     // for debugging
//     start: "top 10%",
//     end: "bottom 60%",
//     scrub: 2
//   },
//   scale: 2,           // example animation
//    x:300,
//   duration: 2
// });

gsap.from('.pro-card', {
  y: 500,
  opacity: 0,
  duration: 1,
  stagger:1,
  scrollTrigger: {
    trigger: '#projects',
    start: 'top 60%',   // adjust as needed
    end: 'bottom 50%',
    scrub: 3,
    markers: false       // show trigger markers (for debugging)
  }
});