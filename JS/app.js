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
  anchors: ["Inicio", "Personal", "Servicios", "contacto"],
  navigationTooltips: ["Inicio", "Personal", "Servicios", "Contacto"],
  showActiveTooltip: false,
  sectionsColor: ["#fafafa", "#fafafa", "#fafafa", "#fafafa"],
  verticalCentered: true,
  controlArrows: true,
  slidesNavigation: false,
  afterLoad: function (origin, destination) {
    if (destination.anchor == "contacto") {
      document.querySelector(".footer").querySelector("h2").style.opacity = 1;
    }
  },
});
