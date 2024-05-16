import { getRequest } from "./getRequest.js";

const aboutUrl = "./js/data/about_data.json";

// get About list
export const getAboutData = async () => await getRequest(aboutUrl);