import { renderProductModal } from "../rendering/productModal.js";
import { getProductData } from "../api/product.js";

export const productModal = async () => {
   const data = await getProductData();
   if (!data) return console.log("Data Not Found!");

   const products = document.querySelectorAll(".product__card");
   const modal = document.querySelector("#productModal");

   const checkModalAddons = (price) => {
      let actualPrice = +price;
      const modalAdditivesButtons = document.querySelectorAll(
         ".modal__additives-btn"
      );
      const modalSizeButtons = document.querySelectorAll(".modal__size-btn");

      const handleSizeClick = ({ currentTarget }) => {
         const additionalCost = +currentTarget.getAttribute("data-price");
         const modalPrice = document.querySelector("#modalPrice");

         if (!currentTarget.classList.contains("active")) {
            modalSizeButtons.forEach((item) => item.classList.remove("active"));
            currentTarget.classList.add("active");

            modalPrice.textContent = `$${actualPrice + additionalCost}`;
         }
      };

      const handleAdditivesClick = ({ currentTarget }) => {
         const additionalCost = +currentTarget.getAttribute("data-price");
         const modalPrice = document.querySelector("#modalPrice");
         const priceValue = +modalPrice.textContent.slice(1);

         if (currentTarget.classList.contains("active")) {
            modalPrice.textContent = `$${priceValue - additionalCost}`;
            actualPrice = actualPrice - additionalCost;
         } else {
            modalPrice.textContent = `$${priceValue + additionalCost}`;
            actualPrice = actualPrice + additionalCost;
         }

         currentTarget.classList.toggle("active");
      };

      const handleListClick = (list, func) => {
         list.forEach((item) => item.addEventListener("click", func));
      };

      handleListClick(modalAdditivesButtons, handleAdditivesClick);
      handleListClick(modalSizeButtons, handleSizeClick);
   };

   const openProductModal = (e) => {
      const key = e.currentTarget.getAttribute("data-key") - 1;

      modal.innerHTML = renderProductModal(data[key]);
      modal.showModal();
      checkModalAddons(data[key].price);
   };

   const closeProductModal = ({ target: { nodeName, id } }) => {
      if (nodeName === "DIALOG" || id === "modalClose") {
         modal.close();
      }
   };

   // Событие клик для каточек продукта
   products.forEach((product) => {
      product.addEventListener("click", openProductModal);
   });

   // Закрытие модального окна

   modal.addEventListener("click", closeProductModal);
};
