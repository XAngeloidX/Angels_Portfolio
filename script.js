function scrollToTop() {
    window.scrollTo({
        top: 0,
    })
}

window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.scrollY > 180) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

function openEmail() {
    const emailLink = "mailto:angelortizsanchez383@gmail.com";
    window.location.href = emailLink;
};