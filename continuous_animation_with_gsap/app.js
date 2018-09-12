let elements = ".container div span";
let animation = new TimelineMax();

animation
  .from(elements, 1, { scale: 0 })
  .to(elements, 1, { y: "-100px", scaleX: 0.25 })
  .to(elements, 1, { scaleY: 0.25, rotation: 180 })
  .to(elements, 1, { scaleX: 1 })
  .to(elements, 1, { y: "-10px", scaleX: 0.1, scaleY: 0.5, rotation: 0 })
  .to(elements, 1, { y: "-300px", delay: 0.5 })
  .timeScale(2);
