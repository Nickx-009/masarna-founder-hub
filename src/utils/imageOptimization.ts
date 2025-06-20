
// Image optimization utilities for better Core Web Vitals
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const lazyLoadImage = (img: HTMLImageElement, src: string) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
        observer.unobserve(img);
      }
    });
  });
  
  observer.observe(img);
};

// Generate optimized image URLs for better performance
export const optimizeImageUrl = (url: string, options: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
} = {}) => {
  const { width = 800, height = 600, quality = 80, format = 'webp' } = options;
  
  // For Unsplash images, add optimization parameters
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`;
  }
  
  return url;
};

// Preload critical images for better performance
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/lovable-uploads/4c19cc81-9f30-4ff8-b639-79916ff68ecd.png', // Logo
    // Add other critical images here
  ];
  
  criticalImages.forEach(src => {
    preloadImage(src).catch(console.error);
  });
};
