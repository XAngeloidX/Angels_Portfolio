var scrollDistance = 0;

function scrollToTop() {
    scrollDistance = 0;
    window.scrollTo({
        top: scrollDistance,
        behavior: 'smooth'
    });
}

function scrollDown() {
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    var scrollTriggerDistance = -1;

    if (this.window.scrollY > scrollTriggerDistance) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

function openEmail() {
    const emailLink = "mailto:angelortizsanchez383@gmail.com";
    window.location.href = emailLink;
};
