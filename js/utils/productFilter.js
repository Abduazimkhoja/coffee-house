import { getProductData } from "../api/product.js";
import { renderProduct } from "../rendering/product.js";

const productFilterButtons = document.querySelectorAll(".product__tab");
const productLoadButton = document.querySelector(".product__load");

let paginationState = {
   index: 1,
   event: null,
   category: "coffee",
};

// pagination step
const paginationCount = (count = 4) => paginationState.index * count;

// filter by category
export const filterProductsByCategory = async () => {
   const { event, category } = paginationState;

   const data = await getProductData();

   const FilteredProductData = data.filter(
      (item) => item.category === category
   );

   if (event) setActiveBtn(event);

   const shouldDisplayLoadButton =
      window.innerWidth <= 800 &&
      FilteredProductData.length > 4 &&
      FilteredProductData.length > paginationCount();

   if (shouldDisplayLoadButton) {
      productLoadButton.style.display = "flex";
      renderProduct(FilteredProductData.slice(0, paginationCount()));
   } else {
      renderProduct(FilteredProductData);
      productLoadButton.style.display = "none";
   }
};

// Load more elements
productLoadButton.onclick = () => {
   ++paginationState.index;
   filterProductsByCategory();
};

// Add click event
productFilterButtons.forEach((button) => {
   button.onclick = (event) => {
      paginationState = {
         index: 1,
         event,
         category: event.currentTarget.name,
      };

      filterProductsByCategory();
   };
});

// Add active class
const setActiveBtn = (e) => {
   productFilterButtons.forEach((button) => {
      button.classList.remove("active");
   });

   e.currentTarget.classList.add("active");
};

// document.addEventListener("DOMContentLoaded", async () => {
//    await filterProductsByCategory();
// });
