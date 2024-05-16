import { setInnerHtml } from "../utils/setInnerHtml.js";

export const renderProduct = (data) => {
   const product = data
      .map(
         (item) =>
            `
		<li class="product__card" data-key = "${item.id}">
			<div class="product__image"><img class="zoom-image" src="${item.images[0]}" alt="" /></div>
			<div class="product__content">
				<div class="product__text">
					<h3 class="product__name">${item.name}</h3>
					<p class="product__description">${item.description}</p>
				</div>
				<h3 class="product__price">$${item.price}</h3>
			</div>
		</li>
		`
      )
      .join("");
   setInnerHtml(".product__list", product);
};
