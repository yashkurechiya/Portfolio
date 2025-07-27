const tl = gsap.timeline();

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change button text/icon
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

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
    duration: 1,
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
    duration: 0.5,
    delay: 0.5
  })
  .from('.r button', {
    opacity: 0,
    duration: 0.5,
    delay: 0.5
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
 