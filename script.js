<script>
  // === Testimonial Slider ===
  const testimonials = [
    {
      stars: 5,
      text: "Eddie worked with great skill and professionalism. He built our flat roof quickly and cleanly. A job well done",
      author: "Vihaan Teo.",
      meta: "6 days ago · Google"
    },
    {
      stars: 5,
      text: "Eddie completed the chimney repair without a hitch. His work was tidy, quick, and professional. We couldn’t have asked for better service.",
      author: "Nicholas Baker.",
      meta: "2 weeks ago · Google"
    },
    {
      stars: 5,
      text: "Peter was excellent in every aspect of the build. He handled the project smoothly and professionally. The flat roof turned out great. Highly skilled and trustworthy.",
      author: "Zahir Boden.",
      meta: "3 week ago · Google"
    },
    {
      stars: 5,
      text: "Eddie did an amazing job on our flat roof. He worked with a high level of precision and care. His professionalism stood out. The result exceeded expectations.",
      author: "Orlando Yael.",
      meta: "1 week ago · Google"
    },
    {
      stars: 5,
      text: "James handled our new flat roof project like a pro. He stayed organized and delivered great results. Very efficient and easy to work with. Superb job.",
      author: "Rudy Eliel.",
      meta: "1 week ago · Google"
    }
  ];

  const container = document.getElementById("testimonial-slider");
  let current = 0;

  function renderTestimonial(index) {
    const t = testimonials[index];
    const stars = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
    container.innerHTML = `
      <div class="testimonial-slide active">
        <div class="testimonial-stars">${stars}</div>
        <div class="testimonial-text">“${t.text}”</div>
        <div class="testimonial-author">${t.author}</div>
        <div class="testimonial-meta">${t.meta}</div>
        <div class="quote-icon">”</div>
      </div>
    `;
  }

  if (container) {
    renderTestimonial(current);
    setInterval(() => {
      current = (current + 1) % testimonials.length;
      renderTestimonial(current);
    }, 5000);
  }

  // === Menu Toggle ===
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const settingsToggle = document.getElementById('settingsToggle');
  const settingsPanel = document.getElementById('settingsPanel');

  if (menuToggle && mobileMenu && settingsToggle && settingsPanel) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      settingsPanel.classList.remove('active');
    });

    settingsToggle.addEventListener('click', () => {
      settingsPanel.classList.toggle('active');
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });

    // Optional: Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mobileMenu') && !e.target.closest('#menuToggle') && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
      if (!e.target.closest('#settingsPanel') && !e.target.closest('#settingsToggle') && settingsPanel.classList.contains('active')) {
        settingsPanel.classList.remove('active');
      }
    });
  }
</script>
