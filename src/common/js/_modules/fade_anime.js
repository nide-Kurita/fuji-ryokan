import IntersectionObserverPolyfill from './intersectionObserverPolyfill';

export default class FadeAnime {
  constructor(){

    new IntersectionObserverPolyfill();
    this.setScrollEffect();
  }
  setScrollEffect(){
    const targets = Array.from(document.querySelectorAll('.fade'));
    const options = {
      rootMargin: '-20% 0%'
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach(function (target) {
      observer.observe(target);
    });

    function callback(entries, object) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-show');
        object.unobserve(entry.target);
      });
    }
  }

}
