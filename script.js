function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thanks for reaching out, ${name}! We'll get back to you at ${email}.`);
  e.target.reset();
});
