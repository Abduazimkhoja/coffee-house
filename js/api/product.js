import { getRequest } from "./getRequest.js";

const productUrl = "./js/data/products-data.json";

// get Product list
export const getProductData = async () => await getRequest(productUrl);
