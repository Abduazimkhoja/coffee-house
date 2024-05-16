import "./utils/burger-menu.js";
import { filterProductsByCategory } from "./utils/productFilter.js";
import { productModal } from "./utils/product-modal.js";

filterProductsByCategory().then(() => {
   productModal();
});

const productList = document.querySelector(".product__list");

// Создаем экземпляр MutationObserver и передаем ему функцию обратного вызова
const observer = new MutationObserver(() => {
   productModal();
});

// Настраиваем наш экземпляр MutationObserver для отслеживания изменений в дочерних элементах
observer.observe(productList, { childList: true });
