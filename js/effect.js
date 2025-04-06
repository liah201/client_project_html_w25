// Fade in
document.body.classList.add('fade-in');

// fade out
document.querySelectorAll('a').forEach(link => {
    if (link.hostname !== window.location.hostname) return;

    link.addEventListener('click', function (e) {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#')) {
            e.preventDefault();
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        }
    });
});


// footer year stamp
document.getElementById("year").textContent = new Date().getFullYear();

// top button functionality
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});