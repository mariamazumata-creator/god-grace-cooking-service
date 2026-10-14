// Edit these two values to change where booking requests are sent.
const WHATSAPP_NUMBER = "2348060032502"; // international format, no + sign
const EMAIL_ADDRESS = "";                // add your business email to enable "Send by email"

document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

const form = document.getElementById("booking");
const errorBox = document.getElementById("formError");
form.elements.date.min = new Date().toISOString().split("T")[0];

let channel = "whatsapp";
form.querySelectorAll("button[type=submit]").forEach(b => b.addEventListener("click", () => channel = b.dataset.channel));

form.addEventListener("submit", e => {
  e.preventDefault();
  const f = form.elements;
  const labels = {name:"name", phone:"phone number", service:"service", date:"date", guests:"number of guests", venue:"venue"};
  const missing = Object.keys(labels).filter(k => !f[k].value.trim());
  if (missing.length) {
    errorBox.textContent = "Please fill in: " + missing.map(k => labels[k]).join(", ") + ".";
    errorBox.hidden = false;
    f[missing[0]].focus();
    return;
  }
  errorBox.hidden = true;
  const text = [
    "New booking request - God Grace Cooking Services",
    "Name: " + f.name.value, "Phone: " + f.phone.value, "Email: " + (f.email.value || "-"),
    "Service: " + f.service.value, "Date: " + f.date.value, "Guests/meals: " + f.guests.value,
    "Venue: " + f.venue.value, "Details: " + (f.details.value || "-")
  ].join("\n");
  if (channel === "email") {
    if (!EMAIL_ADDRESS) {
      errorBox.textContent = "Email is not set up yet. Please use WhatsApp or call 0806 003 2502.";
      errorBox.hidden = false;
      return;
    }
    location.href = "mailto:" + EMAIL_ADDRESS + "?subject=" + encodeURIComponent("Booking request: " + f.service.value) + "&body=" + encodeURIComponent(text);
  } else {
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
  }
});
