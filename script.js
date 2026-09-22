document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     MOBILE NAVIGATION
  ========================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      menuToggle.classList.toggle("open");
    });


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.classList.remove("open");
      });

    });

  }


  /* =========================
     CURRENT PAGE
  ========================= */

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {

    const linkPage =
      link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }

  });


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealElements =
  document.querySelectorAll(
    ".project-card, .pillar-card, .experience-row, .story-chapter, .topic-grid article, .impact-list article, .values-grid article, .intro-grid, .split-story, .section-heading, .speaking-cta > div"
  );


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("reveal");
            requestAnimationFrame(() => {
              entry.target.classList.add("visible");
            });

            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );


    revealElements.forEach(element => {
      observer.observe(element);
    });

  }


  /* =========================
     IMAGE FALLBACK
  ========================= */

  const images = document.querySelectorAll("img");

  images.forEach(image => {

    image.addEventListener("error", () => {

      image.style.display = "none";

      const parent = image.parentElement;

      if (parent) {
        parent.classList.add("image-missing");
      }

    });

  });


  /* =========================
     DETAILS / READ MORE
  ========================= */

  const detailsElements =
    document.querySelectorAll("details");

  detailsElements.forEach(details => {

    details.addEventListener("toggle", () => {

      if (details.open) {
        details.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }

    });

  });


  /* =========================
     HEADER SHADOW
  ========================= */

  const header = document.querySelector(".site-header");

  if (header) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 20) {
        header.style.boxShadow =
          "0 8px 30px rgba(0,0,0,.05)";
      } else {
        header.style.boxShadow = "none";
      }

    });

    }


/* =========================
   HANDWRITTEN HERO WORD
========================= */

const handwrittenWord = document.querySelector(".handwritten-word");

if (handwrittenWord) {

  const words = ["learning", "building", "becoming"];
  let wordIndex = 0;

  function showNextWord() {

    const nextWord = words[wordIndex];

    handwrittenWord.textContent = "";

    let letterIndex = 0;

    const write = setInterval(() => {

      handwrittenWord.textContent =
        nextWord.substring(0, letterIndex + 1);

      letterIndex++;

      if (letterIndex >= nextWord.length) {

        clearInterval(write);

        setTimeout(() => {

          let eraseIndex = nextWord.length;

          const erase = setInterval(() => {

            eraseIndex--;

            handwrittenWord.textContent =
              nextWord.substring(0, eraseIndex);

            if (eraseIndex <= 0) {

              clearInterval(erase);

              wordIndex =
                (wordIndex + 1) % words.length;

              showNextWord();

            }

          }, 75);

        }, 2800);

      }

    }, 110);

  }

  setTimeout(() => {
    showNextWord();
  }, 3000);

}


/* =========================
   HERO ENTRANCE
========================= */

const heroElements = document.querySelectorAll(
  ".hero-content .eyebrow, .hero-content h1, .hero-content .hero-text, .hero-content .hero-buttons"
);

heroElements.forEach((element, index) => {

  element.animate(
    [
      {
        opacity: 0,
        transform: "translateY(24px)"
      },
      {
        opacity: 1,
        transform: "translateY(0)"
      }
    ],
    {
      duration: 800,
      delay: 150 + (index * 150),
      easing: "ease",
      fill: "forwards"
    }
  );

});

});