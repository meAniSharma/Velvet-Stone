document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !subject || !message) {
        status.textContent = "Please fill all fields.";
        status.style.color = "red";
        return;
      }
  
      const formData = {
        name,
        email,
        subject,
        message
      };
  
      console.log("Form submitted:", formData);
  
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    });
  });
  