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
      ".project-card, .pillar-card, .experience-row, .story-chapter, .topic-grid article, .impact-list article, .values-grid article"
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

  const handwrittenWord =
    document.querySelector(".handwritten-word");

  if (handwrittenWord) {

    const words = [
      "learning",
      "building",
      "becoming"
    ];

    let wordIndex = 0;

    const changeWord = () => {

      const currentWord = words[wordIndex];

      let currentLength = currentWord.length;

      handwrittenWord.textContent =
        currentWord.slice(0, currentLength);

      const erase = setInterval(() => {

        currentLength--;

        handwrittenWord.textContent =
          currentWord.slice(0, currentLength);

        if (currentLength <= 0) {

          clearInterval(erase);

          wordIndex =
            (wordIndex + 1) % words.length;

          const nextWord =
            words[wordIndex];

          let nextLength = 0;

          const write = setInterval(() => {

            nextLength++;

            handwrittenWord.textContent =
              nextWord.slice(0, nextLength);

            if (nextLength >= nextWord.length) {
              clearInterval(write);
              setTimeout(changeWord, 2800);
            }

          }, 110);

        }

      }, 75);

    };

    setTimeout(() => {
  console.log("HANDWRITTEN ANIMATION IS RUNNING");
  changeWord();
}, 3000);
  
  }

});