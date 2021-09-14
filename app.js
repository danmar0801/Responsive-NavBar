const navSlide = () => {
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const nav_Links = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        nav_Links.forEach((link, index) => {
        
            if(link.style.animation) {
                link.style.animation = ''; }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                };
        });
        burger.classList.toggle(`toggle`)
    })
    
}

navSlide();
