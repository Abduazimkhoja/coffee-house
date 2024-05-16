import { getQuery } from "./getQuerySelectors.js";
// const next = document.querySelector("#slider-next");
// const prev = document.querySelector("#slider-next");
// const dots = document.querySelector("#dots");
// const sliderList = document.querySelector(".slider__list");
// const sliderImages = document.querySelectorAll(".slider__image");
const queryList = [
   {
      next: "#slider-next",
      prev: "#slider-prev",
      dots: "#dots",
      slider: ".slider__list",
   },
   { sliderImages: ".slider__image" },
];

export const sliderSwitch = () => {
   const { next, prev, dots, slider, sliderImages } = getQuery(queryList);

   let currentSlideIndex = 0;
   let sliderItemLength = slider.childElementCount;
   let slideIntervalId;

   sliderImages.forEach((image) => {
      image.addEventListener("mouseover", () => {
         clearInterval(slideIntervalId);
      });
      image.addEventListener("mouseout", () => {
         startAutoSlide();
      });
   });

   const startAutoSlide = () => {
      slideIntervalId = setInterval(() => next.click(), 2000);
   };

   const restartAutoSlide = () => {
      clearInterval(slideIntervalId);
      startAutoSlide();
   };

   const addDotActive = (dotIndex) => {
      [...dots.children].forEach((dot, index) =>
         dot.classList.toggle("active", index === dotIndex)
      );

      // next.classList.toggle("active", dotIndex == sliderItemLength - 1);
      // prev.classList.toggle("active", dotIndex == 0);
   };

   // Задает стиль для сдвига
   const moveSliderToDotIndex = (index) => {
      slider.style.transform = `translateX(-${index * 100}%)`;
   };

   next.onclick = () => {
      restartAutoSlide();

      if (currentSlideIndex < sliderItemLength - 1) {
         moveSliderToDotIndex(++currentSlideIndex);
         addDotActive(currentSlideIndex);
      } else {
         currentSlideIndex = 0;
         moveSliderToDotIndex(0);
         addDotActive(0);
      }
      // next.classList.toggle("active", currentSlideIndex == sliderItemLength - 1);
   };

   prev.onclick = () => {
      restartAutoSlide();

      if (currentSlideIndex > 0) {
         moveSliderToDotIndex(--currentSlideIndex);
         addDotActive(currentSlideIndex);
      } else {
         currentSlideIndex = sliderItemLength - 1;
         moveSliderToDotIndex(sliderItemLength - 1);
         addDotActive(sliderItemLength - 1);
      }
      // prev.classList.toggle("active", currentSlideIndex == 0);
   };

   dots.onclick = ({ target: { name } }) => {
      const dotIndex = +name;
      currentSlideIndex = dotIndex;

      moveSliderToDotIndex(dotIndex);
      addDotActive(dotIndex);
   };

   startAutoSlide();
};
