
// Script to handle scroll reveal animations
interface ScrollAnimationOptions {
  threshold?: number;
  staggerDelay?: boolean;
  staggerAmount?: number;
}

export const initScrollAnimations = (options: ScrollAnimationOptions = {}) => {
  if (typeof window !== 'undefined') {
    const { 
      threshold = 0.2,
      staggerDelay = false,
      staggerAmount = 100
    } = options;
    
    const scrollElements = document.querySelectorAll('.reveal');
  
    const elementInView = (el: Element, percentage = 0) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (1 - percentage))
      );
    };
  
    const displayScrollElement = (element: Element, index: number) => {
      if (staggerDelay) {
        setTimeout(() => {
          element.classList.add('active');
        }, index * staggerAmount);
      } else {
        element.classList.add('active');
      }
    };
  
    const handleScrollAnimation = () => {
      scrollElements.forEach((el, index) => {
        if (elementInView(el, threshold)) {
          displayScrollElement(el, index);
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
