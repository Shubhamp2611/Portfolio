
  // Mobile menu
  const navLinks = document.getElementById("navLinks");
  const mobileBtn = document.getElementById("mobileBtn");
  mobileBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth Scroll
  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: "smooth" });
  }

  // Resume Modal
  function openResumeModal() {
    document.getElementById("resumeModal").classList.add("open");
  }
  function closeResumeModal() {
    document.getElementById("resumeModal").classList.remove("open");
  }
  function downloadResume() {
    window.open("resume.pdf", "_blank");
  }

  // Animate on scroll
  const animated = document.querySelectorAll("[data-animate]");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  }, { threshold: 0.2 });
  animated.forEach(el => observer.observe(el));

