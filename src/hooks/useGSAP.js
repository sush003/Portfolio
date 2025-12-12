import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function setupGSAPAnimations() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  // Wait for page to load
  window.addEventListener('load', () => {
    // ====================================
    // 1. HERO TEXT ANIMATIONS
    // ====================================
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      '.hero-content .animated-hero-title',
      { opacity: 0, y: 80, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.3 }
    )
      .fromTo(
        '.hero-content p',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        '.hero-content .cta-button',
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        '.scroll-indicator',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )

    // ====================================
    // 2. PARALLAX EFFECT - Spline Animation
    // ====================================
    gsap.to('spline-viewer', {
      y: 300,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    // Parallax for hero content (moves slower)
    gsap.to('.hero-content', {
      y: 150,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    })

    // ====================================
    // 3. ANIMATE BORDER ABOVE ABOUT US
    // ====================================
    gsap.fromTo(
      '#about .section-divider',
      { opacity: 0, scaleX: 0 },
      {
        opacity: 1,
        scaleX: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 90%',
          end: 'top 70%',
          scrub: true,
        },
      }
    )

    // Fade divider back out as scrolling continues
    gsap.to('#about .section-divider', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        end: 'top 20%',
        scrub: true,
      },
    })

    // ====================================
    // 4. FEATURE CARDS STAGGER ANIMATION
    // ====================================
    gsap.fromTo(
      '.feature-card',
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // ====================================
    // 5. CONTENT SECTIONS FADE IN
    // ====================================
    gsap.utils.toArray('.content-section').forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // ====================================
    // 6. CTA SECTION SCALE ANIMATION
    // ====================================
    gsap.fromTo(
      '.cta-section',
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // ====================================
    // 7. SECTION HEADINGS SLIDE IN
    // ====================================
    gsap.utils.toArray('.content-section h2').forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  })
}

