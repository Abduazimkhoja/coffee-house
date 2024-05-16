export const renderProductModal = (data) => {
   const { name, description, price, images, sizes, additives } = data;

   const renderAdditives = additives
      .map((item, index) => {
         return ` <button class="modal__additives-btn button-tab" data-price = "${
            item["add-price"]
         }" >
         <i class="button-tab__icon">${index + 1}</i>${item.name}
       </button>`;
      })
      .join("");

   const renderSize = Object.entries(sizes)
      .map(([name, item], index) => {
         const res = `
   	<button class="button-tab modal__size-btn ${
         index === 0 ? "active" : ""
      }" data-price = "${item["add-price"]}">
   		<i class="button-tab__icon">${name}</i>${item.size}
   	</button>
   	`;
         return res;
      })
      .join("");

   const details = `<div class="modal__wrap">
      <div class="modal__image">
         <img src="${images[0]}" alt="">
      </div>
      <ul class="modal__content">
         <li class="modal__text">
            <h3 class="modal__name">${name}</h3>
            <p class="modal__description">
               ${description}
            </p>
         </li>
         <li class="modal__addons">
            <p>Size</p>
            <div id="modalSize" class="modal__size flex-row gap-sm">
				${renderSize}
            </div>
         </li>
         <li class="modal__addons">
            <p>Additives</p>
            <div id="modalAdditives" class="modal__additives flex-row gap-sm">
				${renderAdditives}
            </div>
         </li>
         <li class="modal__total flex-row">
            <h3>Total:</h3>
            <h3 id="modalPrice">$${price}</h3>
         </li>
         <li class="modal__info ">
            <i class="icon-info"></i>
            <p class="caption">
               The cost is not final. Download our mobile app to see the final
               price and place your order. Earn loyalty points and your favorite
               coffee with up to 20% discount.
            </p>
         </li>
         <li class="modal__close">
            <button id="modalClose" class="button-secondary">Close</button>
         </li>
      </ul>
   </div>`;

   return details;
};
