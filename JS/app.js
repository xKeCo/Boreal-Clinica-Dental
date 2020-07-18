const secciones = new fullpage("#fullpage", {
  autoScrolling: true,
  fitToSection: false,
  fitToSectionDelay: 300,
  easing: "easeInOutCubic",
  scrollingSpeed: 600,
  css3: true,
  easingcss3: "ease-out",
  loopBottom: false,
  navigation: true,
  menu: "#menu",
  anchors: ["inicio", "Personal", "Servicios", "Experiencia", "contacto"],
  navigationTooltips: ["inicio", "Personal", "Servicios", "Experiencia", "Contacto"],
  showActiveTooltip: false,
  sectionsColor: ["#fafafa", "#000", "#fafafa", "#fafafa", "#fafafa"],
  verticalCentered: true,
  controlArrows: true,
  slidesNavigation: false,
  afterLoad: function (origin, destination) {
    if (destination.anchor == "contacto") {
      document.querySelector(".footer").querySelector("h2").style.opacity = 1;
    }
  },
});
