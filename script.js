const targets = document.querySelectorAll('.rr-lazyload')
const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        [...entries].map((entry) => {
            if (entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('data-lazy');
                img.classList.add('rr-show');
                img.setAttribute('src', src);
                observer.disconnect();
            }
        });
    });
    io.observe(target);
};

[...targets].map((lazyLoad))