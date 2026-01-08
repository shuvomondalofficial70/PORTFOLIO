
// var typed = new Typed("#typed-text", {
//     strings: ["Web Developer", "Freelancer", "Web Designer"],
//     typeSpeed: 80,
//     backSpeed: 50,
//     backDelay: 1500,
//     loop: true
// });


    const texts = [
    "Web Developer",
    "Freelancer",
    "Web Designer",
    ];

    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typedText = document.getElementById("typed-text");

    function typeEffect() {
        currentText = texts[index];

    if (!isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
        isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
    }
  } else {
        typedText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
        isDeleting = false;
    index = (index + 1) % texts.length;
    }
  }
    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

    typeEffect();


