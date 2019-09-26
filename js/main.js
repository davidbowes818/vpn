// UI VARS

const accordions = document.getElementsByClassName("accordion");

// ACCORDION

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("accordion-active");
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
