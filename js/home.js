import { about } from "./utils/about-add.js";
import { sliderSwitch } from "./utils/slider-switch.js";
import "./utils/burger-menu.js";

about().then(() => {
   sliderSwitch();
});
