import Splide from "@splidejs/splide";
//import Video from "@splidejs/splide-extension-video";

import "../../node_modules/@splidejs/splide/dist/css/splide.min.css";

if ($("#jumbotron-splide").length)
  new Splide("#jumbotron-splide", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    lazyLoad: "nearby",
    preloadPages: 1,
    speed: 1000,
  }).mount({});


