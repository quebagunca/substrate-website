particlesJS("particles-js", {
  particles: {
    number: { value: 55, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.35, random: true },
    size: { value: 2, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.16,
      width: 1
    },
    move: { enable: true, speed: 0.5, direction: "none", out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: false },
      resize: true
    },
    modes: { grab: { distance: 150, line_linked: { opacity: 0.35 } } }
  },
  retina_detect: true
});
