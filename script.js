let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    });
});
const songCards = document.querySelectorAll('.song-card');

songCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`Playing ${card.querySelector('h3').textContent}`);
    });
});
