// UI VARS

const accordions = document.getElementsByClassName('accordion');

// ACCORDION

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('accordion-active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // ACCORDION OPEN
      content.style.maxHeight = null;
    } else {
      // ACCORDION CLOSED
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  };
}

$('.landing .btn, .contact-cards a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
