
// Script to handle scroll reveal animations
export const initScrollAnimations = () => {
  if (typeof window !== 'undefined') {
    const scrollElements = document.querySelectorAll('.reveal');
  
    const elementInView = (el: Element, percentage = 0) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (1 - percentage))
      );
    };
  
    const displayScrollElement = (element: Element) => {
      element.classList.add('active');
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 0.2)) {
          displayScrollElement(el);
        }
      });
    };
  
    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });
  
    // Initial check on load
    handleScrollAnimation();
  }
};
