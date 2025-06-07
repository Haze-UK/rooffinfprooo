// Testimonial Data
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
    author: "aRudy Eliel.",
    meta: "1 week ago · Google"
  }
];

let current = 0;
const container = document.getElementById("testimonial-slider");

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

// Initialize first testimonial
if (container) {
  renderTestimonial(current);
  setInterval(() => {
    current = (current + 1) % testimonials.length;
    renderTestimonial(current);
  }, 5000); // Change testimonial every 5 seconds
}

// Hamburger menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('active');
  document.getElementById('settingsPanel').classList.remove('active'); // Close settings if open
});

// Settings panel toggle
document.getElementById('settingsToggle').addEventListener('click', () => {
  document.getElementById('settingsPanel').classList.toggle('active');
  document.getElementById('mobileMenu').classList.remove('active'); // Close menu if open
});
