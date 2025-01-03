function initializeAnimations() {
    document.querySelector('.Hero-content-title-1')?.classList.add('slide-in-left','delay-0');
    document.querySelector('.Hero-content-title-2')?.classList.add('slide-in-left', 'delay-1');
    document.querySelector('.Hero-content')?.classList.add('slide-in-left', 'delay-2');
    document.querySelector('.Hero-content-btns')?.classList.add('slide-in-up', 'delay-3');
    document.querySelector('.Scroll-animation-container')?.classList.add('fade-in', 'delay-3');
}
  
document.addEventListener('DOMContentLoaded', initializeAnimations);