// 📧 CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(event){

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  window.location.href =
  `mailto:christiannnamani135@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  alert("✅ Message window opened!");

});

// ✨ SCROLL ANIMATION
const observer = new IntersectionObserver((entries, observer)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("active");

      observer.unobserve(entry.target);

    }

  });

},{

  rootMargin:'0px 0px -100px 0px'

});

document.querySelectorAll('.fade-up').forEach(item=>{

  observer.observe(item);

});

// ✨ MOVING STARS
const starsContainer = document.getElementById("stars");

for(let i = 0; i < 150; i++){

  let star = document.createElement("div");

  star.classList.add("star");

  // random position
  star.style.left =
    Math.random() * window.innerWidth + "px";

  star.style.top =
    Math.random() * window.innerHeight + "px";

  // random size
  let size = Math.random() * 3 + 1 + "px";

  star.style.width = size;
  star.style.height = size;

  // random speed
  star.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

  starsContainer.appendChild(star);

}
