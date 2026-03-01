// ── Lenis Smooth Scroll ──
const lenis = new Lenis({
  duration: 1.4,       // scroll duration (higher = slower/smoother glide)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
  smoothWheel: true,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".line-text");

  lines.forEach((line, i) => {
    setTimeout(
      () => {
        line.classList.add("revealed");
      },
      200 + i * 130,
    );
  });

  // Scroll-based scale animation for sections
  const valueProp = document.querySelector(".value-prop-section");
  const useCase = document.querySelector(".use-case-section");
  const navbar = document.querySelector(".navbar");

  if (valueProp && useCase) {
    const onScroll = () => {
      const windowH = window.innerHeight;
      const navH = navbar ? navbar.offsetHeight : 80;

      // Logic for Value Prop (Black Section)
      const rectVP = valueProp.getBoundingClientRect();
      const progressVP = Math.min(Math.max((windowH - rectVP.top) / (windowH * 0.5), 0), 1);
      valueProp.style.transform = `scale(${0.92 + progressVP * 0.08})`;

      // Logic for Use Case (White Section)
      const rectUC = useCase.getBoundingClientRect();
      const progressUC = Math.min(Math.max((windowH - rectUC.top) / (windowH * 0.5), 0), 1);
      useCase.style.transform = `scale(${0.92 + progressUC * 0.08})`;

      // Navbar Color Logic
      if (navbar) {
        // If white section hits navbar, remove dark mode
        if (rectUC.top <= navH) {
          navbar.classList.remove("dark");
        }
        // If black section hits navbar (but white hasn't), add dark mode
        else if (rectVP.top <= navH) {
          navbar.classList.add("dark");
        }
        // Otherwise, stay light
        else {
          navbar.classList.remove("dark");
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ── Hero Lottie Animation ──
  const heroLottieContainer = document.getElementById("hero-lottie");
  if (heroLottieContainer && typeof lottie !== "undefined") {
    heroLottieContainer.style.opacity = "0";
    heroLottieContainer.style.transform = "translateY(30px) scale(0.96)";
    heroLottieContainer.style.transition = "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s";

    const revealLottie = () => {
      heroLottieContainer.style.opacity = "1";
      heroLottieContainer.style.transform = "translateY(0) scale(1)";
    };

    // Helper: Play the animation
    const playLottie = (jsonData) => {
      try {
        const anim = lottie.loadAnimation({
          container: heroLottieContainer,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: jsonData,
        });
        anim.addEventListener("DOMLoaded", revealLottie);
        // Backup reveal in case event doesn't fire
        setTimeout(revealLottie, 2000);
      } catch (err) {
        console.error("Lottie Play Error:", err);
        revealLottie();
      }
    };

    // 1. Check if data is already loaded via script tag (Best for local file://)
    if (window.heroLottieData) {
      playLottie(window.heroLottieData);
    } else {
      // 2. Fallback if script tag failed (works on http/https)
      const lottieUrl = "./assets/computerztech.json";
      fetch(lottieUrl)
        .then((res) => res.json())
        .then((data) => playLottie(data))
        .catch(() => {
          // 3. Last resort fetch-alternative
          try {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", lottieUrl, false);
            xhr.send();
            if (xhr.status === 0 || xhr.status === 200) {
              playLottie(JSON.parse(xhr.responseText));
            } else { revealLottie(); }
          } catch (e) {
            console.warn("Lottie loading failed entirely.");
            revealLottie();
          }
        });
    }
  }

  // Intersection Observer for slide-in animations
  const observerOptions = {
    threshold: 0.1,
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe items
  const observe = (selector) => {
    const el = document.querySelector(selector);
    if (el) revealObserver.observe(el);
  };

  const observeAll = (selector) => {
    const els = document.querySelectorAll(selector);
    els.forEach((el, i) => {
      if (el.classList.contains('founder-card') || el.classList.contains('use-case-card')) {
        el.style.transitionDelay = `${i * 0.15}s`;
      }
      revealObserver.observe(el);
    });
  };

  observe(".showcasing-heading");
  observe(".founders-title");
  observe(".use-case-heading");
  observeAll(".founder-card");
  observeAll(".use-case-card");
});
