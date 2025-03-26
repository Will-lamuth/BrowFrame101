function checkScroll() {
    let sections = document.querySelectorAll('.animate');
    sections.forEach(sec => {
        let top = sec.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        let showPoint = 30;
        if (top < windowHeight - showPoint) {
            sec.classList.add('show-animate'); 
            sec.classList.remove('opacity-0');
        } else {
            sec.classList.remove('show-animate');
            sec.classList.add('opacity-0');
        }
    });
}


// Run the checkScroll function on load and scroll
window.addEventListener('DOMContentLoaded', checkScroll);
window.addEventListener('scroll', checkScroll);