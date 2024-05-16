import { setInnerHtml } from "../utils/setInnerHtml.js";

export const renderAbout = (data) => {
   const about = data
      .map(
         (item) =>
            `<li class="slider__item flex-column">
            <img src="${item.images[0]}" alt="" class="slider__image">

            <div class="slider__text flex-column">
               <h3 class="slider__name">${item.title}</h3>
               <p class="slider__description">${item.description}</p>
               <h3 class="slider__price">${item.price}</h3>
            </div>
         </li>`
      )
      .join("");

   setInnerHtml(".slider__list", about);
};
